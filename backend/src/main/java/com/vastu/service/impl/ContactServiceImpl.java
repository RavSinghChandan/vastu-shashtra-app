package com.vastu.service.impl;

import com.vastu.model.ContactForm;
import com.vastu.repository.ContactFormRepository;
import com.vastu.service.ContactService;
import com.vastu.service.EmailService;
import com.vastu.service.ValidationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ContactServiceImpl implements ContactService {

    private final ContactFormRepository contactFormRepository;
    private final EmailService emailService;
    private final ValidationService validationService;

    @Autowired
    public ContactServiceImpl(
            ContactFormRepository contactFormRepository,
            EmailService emailService,
            ValidationService validationService) {
        this.contactFormRepository = contactFormRepository;
        this.emailService = emailService;
        this.validationService = validationService;
    }

    @Override
    public ContactForm saveContact(ContactForm contactForm) {
        validateContact(contactForm);
        ContactForm savedContact = contactFormRepository.save(contactForm);
        emailService.sendConfirmationEmail(savedContact);
        return savedContact;
    }

    @Override
    public Optional<ContactForm> getContactById(Long id) {
        return contactFormRepository.findById(id);
    }

    @Override
    public List<ContactForm> getAllContacts() {
        return contactFormRepository.findAll();
    }

    @Override
    public void deleteContact(Long id) {
        contactFormRepository.deleteById(id);
    }

    @Override
    public void validateContact(ContactForm contactForm) {
        validationService.validateContactForm(contactForm);
    }
} 