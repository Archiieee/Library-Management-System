package com.xfactor.openlibrary.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.xfactor.openlibrary.domain.Publisher;
import com.xfactor.openlibrary.repository.PublisherRepository;

@RestController
@RequestMapping("PublisherController")
public class PublisherController {

    private PublisherRepository publisherRepository;

    public PublisherController(PublisherRepository publisherRepository) {
        this.publisherRepository = publisherRepository;
    }

    @PostMapping("/savePublisher")
    public Publisher savePublisher(@RequestBody Publisher publisher) {
        publisherRepository.save(publisher);
        return publisher;
    }

    @PutMapping("/updatePublisher")
    public Publisher updatePublisher(@RequestBody Publisher publisher) {
        if (publisher.getId() != null) {
            Publisher publisher2 = publisherRepository.save(publisher);
            return publisher2;
        }
        return null;
    }

    @GetMapping("/getAllPublisher")
    public List<Publisher> getAllPublishers() {
        return publisherRepository.findAll();
    }

    @DeleteMapping("deletePublisherById/{id}")
    public void deletePublisher(@PathVariable Long id) {
        publisherRepository.deleteById(id);
    }

}
