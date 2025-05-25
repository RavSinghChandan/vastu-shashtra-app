package com.vastu.service;

import com.vastu.model.ContactForm;

public interface EmailService {
    void sendConfirmationEmail(ContactForm contactForm);
    void sendNotificationEmail(ContactForm contactForm);
} 