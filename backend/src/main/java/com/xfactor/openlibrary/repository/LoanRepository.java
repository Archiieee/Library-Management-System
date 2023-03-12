package com.xfactor.openlibrary.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.xfactor.openlibrary.domain.Loan;

public interface LoanRepository extends JpaRepository<Loan, Long> {

}
