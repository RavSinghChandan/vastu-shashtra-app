package com.vastu.service;

import com.vastu.model.ContactForm;

public interface ValidationService {
    void validateContactForm(ContactForm contactForm);
    boolean isValidEmail(String email);
    boolean isValidPhone(String phone);
} 