package io.takima.demo.controllers;

import io.takima.demo.dao.UserDAO;
import io.takima.demo.models.User;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class UserController {

    private final UserDAO userDAO;

    public UserController(UserDAO userDAO) {
        this.userDAO = userDAO;
    }

    @GetMapping()
    public List<User> getUsers() {
        Iterable<User> it = this.userDAO.findAll();
        List<User> users = new ArrayList<>();
        it.forEach(e -> users.add(e));

        return users;
    }

    @PostMapping()
    public User addUser(@RequestBody User user) {
        return this.userDAO.save(user);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        this.userDAO.deleteById(id);
    }

    @GetMapping("/{email}")
    public User checkEmailUser(@PathVariable String email) {
        Iterable<User> it = this.userDAO.findAll();
        List<User> users = new ArrayList<>();
        it.forEach(e -> users.add(e));

        User userCheck = new User();
        for (User user : users) {
            if (user.getEmail().equals(email)) {
                userCheck.setId(user.getId());
                userCheck.setFirstName(user.getFirstName());
                userCheck.setLastName(user.getLastName());
                userCheck.setAge(user.getAge());
                userCheck.setEmail(email);
            }
        }
        return userCheck;
    }

}
