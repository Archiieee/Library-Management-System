package com.xfactor.openlibrary.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.xfactor.openlibrary.domain.Author;

public interface AuthorRepository extends JpaRepository<Author, Long> {

}
