package com.xfactor.openlibrary.controllers;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.xfactor.openlibrary.domain.Book;
import com.xfactor.openlibrary.repository.BookRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/book")
public class BooksController {

    private BookRepository bookRepository;

    // we need not create any object for Repository- it is automatically created by
    // spring - this is IoC or Dependency Injection
    public BooksController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    // ArrayList<Book> Ibooks = new ArrayList<>();

    // @PostMapping("/saveBook")
    // public Book saveBook(@RequestBody Book book) {
    // if (book.getId() == null) {
    // Book book2 = bookRepository.save(book);
    // return book2;
    // }
    // return null;

    // }
    @PostMapping("/saveBook")
    public Book saveBook(@RequestBody Book book) {
        bookRepository.save(book);
        return book;
    }

    @PutMapping("/updateBook")
    public Book updateBook(@RequestBody Book book) {
        if (book.getId() != null) {
            Book book2 = bookRepository.save(book);
            return book2;
        }
        return null;
    }

    @GetMapping("/getAllBooks")
    public List<Book> getAllBooks() {
        return bookRepository.findAll();

    }

    @GetMapping("findById/{id}")
    public Book findById(@PathVariable Long id) {
        Optional<Book> optionalOfBook = bookRepository.findById(id);
        if (optionalOfBook.isPresent()) {
            return optionalOfBook.get();
        }
        return null;
    }

    @GetMapping("findByisbn/{isbn}")
    public List<Book> findByisbn(@PathVariable String isbn) {
        List<Book> books = bookRepository.findByIsbn(isbn);
        return books;
    }

    @GetMapping("findTotal")
    public Long findTotal() {
        return bookRepository.count();
    }

    @DeleteMapping("delete/{id}")
    public void deleteBook(@PathVariable Long id) {
        bookRepository.deleteById(id);
    }

}

// getall books - list of book
// getall get book by id - single book
// book properties- name, isbn num, price,author, pages,yr of publication