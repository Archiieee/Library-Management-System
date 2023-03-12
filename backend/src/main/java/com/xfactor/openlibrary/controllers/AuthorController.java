package com.xfactor.openlibrary.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xfactor.openlibrary.domain.Admin;
import com.xfactor.openlibrary.domain.Author;
import com.xfactor.openlibrary.repository.AdminRepository;
import com.xfactor.openlibrary.repository.AuthorRepository;

@RestController
@RequestMapping("/author")
public class AuthorController {

    // ArrayList<Author> Iauthors = new ArrayList<>();
    private AuthorRepository authorRepository;

    public AuthorController(AuthorRepository authorRepository) {
        this.authorRepository = authorRepository;
    }

    // @PostMapping("/saveAuthor")
    // public Author saveAuthor(@RequestBody Author author) {
    // if (author.getId() == null) {
    // Author author2 = authorRepository.save(author);
    // return author2;
    // }
    // return null;
    // }

    @PostMapping("/saveAuthor")
    public Author saveAuthor(@RequestBody Author author) {
        authorRepository.save(author);
        return author;
    }

    @PutMapping("/updateAuthor")
    public Author updateAuthor(@RequestBody Author author) {
        if (author.getId() != null) {
            Author author2 = authorRepository.save(author);
            return author2;
        }
        return null;
    }

    @GetMapping("/getAllAuthor")
    public List<Author> getAllAuthors() {
        return authorRepository.findAll();
    }

    @GetMapping("/getAuthorById/{id}")
    public Author getAuthorId(@PathVariable Long id) {
        Optional<Author> optionalOfAuthor = authorRepository.findById(id);
        if (optionalOfAuthor.isPresent()) {
            return optionalOfAuthor.get();
        }
        return null;
    }

    @GetMapping("findTotal")
    public Long findTotal() {
        return authorRepository.count();
    }

    @DeleteMapping("delete/{id}")
    public void deleteAdmin(@PathVariable Long id) {
        authorRepository.deleteById(id);
    }

}

// getall authors, get authorbyid
// author name, age