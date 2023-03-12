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

import com.xfactor.openlibrary.domain.Loan;
import com.xfactor.openlibrary.repository.LoanRepository;

@RestController
@RequestMapping("/loan")
public class LoanController {

    private LoanRepository loanRepository;

    public LoanController(LoanRepository loanRepository) {
        this.loanRepository = loanRepository;
    }

    // @PostMapping("/saveLoan")
    // public Loan saveLoan(@RequestBody Loan loan) {
    // Iloans.add(loan);
    // return loan;
    // }

    @PostMapping("/saveLoan")
    public Loan saveLoan(@RequestBody Loan loan) {
        loanRepository.save(loan);
        return loan;
    }

    @PutMapping("/updateLoan")
    public Loan updateLoan(@RequestBody Loan loan) {
        if (loan.getId() != null) {
            Loan loan2 = loanRepository.save(loan);
            return loan2;
        }
        return null;
    }

    @GetMapping("/getAllLoans")
    public List<Loan> getAllLoans() {
        return loanRepository.findAll();
    }

    @DeleteMapping("delete/{id}")
    public void deleteLoan(@PathVariable Long id) {
        loanRepository.deleteById(id);
    }

    @GetMapping("findById/{id}")
    public Loan findById(@PathVariable Long id) {
        Optional<Loan> optionalOfLoan = loanRepository.findById(id);
        if (optionalOfLoan.isPresent()) {
            return optionalOfLoan.get();
        }
        return null;
    }

}
