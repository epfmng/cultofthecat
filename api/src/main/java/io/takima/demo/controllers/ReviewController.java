package io.takima.demo.controllers;

import io.takima.demo.dao.KittenDAO;
import io.takima.demo.dao.ReviewDAO;
import io.takima.demo.models.Kitten;
import io.takima.demo.models.MyReview;
import io.takima.demo.models.Review;
import net.bytebuddy.dynamic.DynamicType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/reviews")
@CrossOrigin
public class ReviewController {

    private final ReviewDAO reviewDAO;
    private final KittenDAO kittenDAO;

    public ReviewController(ReviewDAO reviewDAO, KittenDAO kittenDAO) {
        this.reviewDAO = reviewDAO;
        this.kittenDAO = kittenDAO;
    }

    @GetMapping()
    public List<Review> getReviews() {
        Iterable<Review> it = this.reviewDAO.findAll();
        List<Review> reviews = new ArrayList<>();
        it.forEach(e -> reviews.add(e));

        return reviews;
    }

    @GetMapping("/{id}")
    public Optional<List<MyReview>> getReviewsByUserId(@PathVariable Long id) {
        Iterable<Review> it = this.reviewDAO.findAll();
        List<Review> reviews = new ArrayList<>();
        it.forEach(e -> reviews.add(e));

        List<Review> userReviews = new ArrayList<>();
        for (Review review :reviews) {
            if(review.getUserid() == id){
                userReviews.add(review);
            }
        }

        Iterable<Kitten> it2 = this.kittenDAO.findAll();
        List<Kitten> kittens = new ArrayList<>();
        it2.forEach(e -> kittens.add(e));

        List<MyReview> userReviewsImage = new ArrayList<>();

        for (Review review: userReviews) {
            for (Kitten kitten: kittens) {
                if(review.getKittenid() == kitten.getId()) {
                   MyReview reviewImage = new MyReview(review.getId(), review.getDate(), review.getRating(),
                           review.getText(), kitten.getId(), kitten.getFirstName(), kitten.getImagepath());
                   userReviewsImage.add(reviewImage);
                }
            }
        }

        return Optional.ofNullable(userReviewsImage);
    }

    @PostMapping()
    public Review addReview(@RequestBody Review review) {
        return this.reviewDAO.save(review);
    }

    @DeleteMapping("/{id}")
    public void deleteReview(@PathVariable Long id) {
        this.reviewDAO.deleteById(id);
    }

}
