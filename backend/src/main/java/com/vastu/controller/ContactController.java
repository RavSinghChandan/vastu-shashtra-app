package com.vastu.controller;

import com.vastu.model.ContactForm;
import com.vastu.repository.ContactFormRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ContactController {

    @Autowired
    private ContactFormRepository contactFormRepository;

    @PostMapping("/contact")
    public ResponseEntity<?> submitContactForm(@Valid @RequestBody ContactForm contactForm) {
        ContactForm savedForm = contactFormRepository.save(contactForm);
        return ResponseEntity.ok(savedForm);
    }
} 