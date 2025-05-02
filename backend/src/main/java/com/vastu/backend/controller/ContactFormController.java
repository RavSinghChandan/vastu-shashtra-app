package com.vastu.backend.controller;

import com.vastu.backend.model.ContactForm;
import com.vastu.backend.service.ContactFormService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:4200")
@Tag(name = "Contact Form", description = "Contact form management APIs")
public class ContactFormController {

    private final ContactFormService contactFormService;

    @Autowired
    public ContactFormController(ContactFormService contactFormService) {
        this.contactFormService = contactFormService;
    }

    @PostMapping
    @Operation(summary = "Submit a new contact form")
    public ResponseEntity<ContactForm> submitContactForm(@Valid @RequestBody ContactForm contactForm) {
        ContactForm savedForm = contactFormService.saveContactForm(contactForm);
        return ResponseEntity.ok(savedForm);
    }
} 