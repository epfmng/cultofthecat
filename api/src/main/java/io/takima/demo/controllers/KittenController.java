package io.takima.demo.controllers;

import io.takima.demo.dao.KittenDAO;
import io.takima.demo.models.Kitten;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
//import java.util.NoSuchElementException;
//import java.util.Optional;

@RestController
@RequestMapping("/kittens")
@CrossOrigin
public class KittenController {

    private final KittenDAO kittenDAO;

    public KittenController(KittenDAO kittenDAO) {
        this.kittenDAO = kittenDAO;
    }

    @GetMapping()
    public List<Kitten> getKittens() {
        Iterable<Kitten> it = this.kittenDAO.findAll();
        List<Kitten> kittens = new ArrayList<>();
        it.forEach(e -> kittens.add(e));

        return kittens;
    }

//    @GetMapping("/{id}")
//    public Kitten getKitten(@PathVariable Long id) {
//        return this.kittenDAO.findById(id).orElseThrow(() -> new NoSuchElementException("Chaton non trouvé"));
//    }

    @PostMapping()
    public Kitten addKitten(@RequestBody Kitten kitten) {
        return this.kittenDAO.save(kitten);
    }

    @DeleteMapping("/{id}")
    public void deleteKitten(@PathVariable Long id) {
        this.kittenDAO.deleteById(id);
    }

}
