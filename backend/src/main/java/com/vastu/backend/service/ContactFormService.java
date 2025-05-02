package com.vastu.backend.service;

import com.vastu.backend.model.ContactForm;
import com.vastu.backend.repository.ContactFormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactFormService {
    private final ContactFormRepository contactFormRepository;

    @Autowired
    public ContactFormService(ContactFormRepository contactFormRepository) {
        this.contactFormRepository = contactFormRepository;
    }

    public ContactForm saveContactForm(ContactForm contactForm) {
        return contactFormRepository.save(contactForm);
    }
} 