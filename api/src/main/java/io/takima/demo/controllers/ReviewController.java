package io.takima.demo.controllers;

import io.takima.demo.dao.ReviewDAO;
import io.takima.demo.models.Review;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

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

    @PostMapping()
    public Review addReview(@RequestBody Review review) {
        return this.reviewDAO.save(review);
    }

    @DeleteMapping("/{id}")
    public void deleteReview(@PathVariable Long id) {
        this.reviewDAO.deleteById(id);
    }

}
