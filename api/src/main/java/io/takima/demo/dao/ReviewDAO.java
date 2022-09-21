package io.takima.demo.dao;

import io.takima.demo.models.Review;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 *
 */
@Repository
public interface ReviewDAO extends CrudRepository<Review, Long> {

}
