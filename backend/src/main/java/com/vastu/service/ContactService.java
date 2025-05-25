package com.vastu.service;

import com.vastu.model.ContactForm;
import java.util.List;
import java.util.Optional;

public interface ContactService {
    ContactForm saveContact(ContactForm contactForm);
    Optional<ContactForm> getContactById(Long id);
    List<ContactForm> getAllContacts();
    void deleteContact(Long id);
    void validateContact(ContactForm contactForm);
} 