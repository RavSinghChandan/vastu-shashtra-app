import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ContactForm } from '../models/contact-form.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = `${environment.apiUrl}/contact`;

  constructor(private http: HttpClient) {}

  submitContactForm(form: ContactForm): Observable<ContactForm> {
    return this.http.post<ContactForm>(this.apiUrl, form);
  }

  validateForm(form: ContactForm): boolean {
    return this.validateEmail(form.email) && 
           this.validateName(form.name) && 
           this.validateMessage(form.message);
  }

  private validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private validateName(name: string): boolean {
    return name.length >= 2 && name.length <= 100;
  }

  private validateMessage(message: string): boolean {
    return message.length >= 10 && message.length <= 1000;
  }
} 