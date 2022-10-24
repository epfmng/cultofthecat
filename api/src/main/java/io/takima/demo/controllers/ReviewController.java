package io.takima.demo.controllers;

import io.takima.demo.dao.ReviewDAO;
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

    public ReviewController(ReviewDAO reviewDAO) {
        this.reviewDAO = reviewDAO;
    }

    @GetMapping()
    public List<Review> getReviews() {
        Iterable<Review> it = this.reviewDAO.findAll();
        List<Review> reviews = new ArrayList<>();
        it.forEach(e -> reviews.add(e));

        return reviews;
    }

    @GetMapping("/{id}")
    public Optional<List<Review>> getReviewsByUserId(@PathVariable Long id) {
        Iterable<Review> it = this.reviewDAO.findAll();
        List<Review> reviews = new ArrayList<>();
        it.forEach(e -> reviews.add(e));

        List<Review> userReviews = new ArrayList<>();
        for (Review review :reviews) {
            if(review.getUserid() == id){
                userReviews.add(review);
            }
        }

        return Optional.ofNullable(userReviews);
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
