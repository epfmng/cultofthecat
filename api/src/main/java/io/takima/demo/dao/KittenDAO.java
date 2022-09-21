package io.takima.demo.dao;

import io.takima.demo.models.Kitten;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 *
 */
@Repository
public interface KittenDAO extends CrudRepository<Kitten, Long> {

}
