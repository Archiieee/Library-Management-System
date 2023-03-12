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
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.xfactor.openlibrary.domain.Admin;
import com.xfactor.openlibrary.repository.AdminRepository;

@RestController
@RequestMapping("/admin")
public class AdminController {

    private AdminRepository adminRepository;

    public AdminController(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    // @PostMapping("/saveAdmin")
    // public Admin saveAdmin(@RequestBody Admin admin) {
    // if (admin.getId() == null) {
    // Admin admin2 = adminRepository.save(admin);
    // return admin2;
    // }
    // return null;
    // }

    @PostMapping("/saveAdmin")
    public Admin saveAdmin(@RequestBody Admin admin) {
        adminRepository.save(admin);
        return admin;
    }

    @PutMapping("/updateAdmin")
    public Admin updateAdmin(@RequestBody Admin admin) {
        if (admin.getId() != null) {
            Admin admin2 = adminRepository.save(admin);
            return admin2;
        }
        return null;
    }

    @GetMapping("/getAllAdmins")
    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

    @GetMapping("/getAdminById/{id}")
    public Admin getAdminId(@PathVariable Long id) {
        Optional<Admin> optionalOfAdmin = adminRepository.findById(id);
        if (optionalOfAdmin.isPresent()) {
            return optionalOfAdmin.get();
        }
        return null;
    }

    @GetMapping("findTotal")
    public Long findTotal() {
        return adminRepository.count();
    }

    @DeleteMapping("delete/{id}")
    public void deleteAdmin(@PathVariable Long id) {
        adminRepository.deleteById(id);
    }

}