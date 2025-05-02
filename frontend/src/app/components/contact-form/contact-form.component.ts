import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  template: `
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h1 class="text-center mb-4">Contact Us</h1>
        <div class="card">
          <div class="card-body">
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" formControlName="name"
                       [ngClass]="{'is-invalid': contactForm.get('name')?.invalid && contactForm.get('name')?.touched}">
                <div class="invalid-feedback" *ngIf="contactForm.get('name')?.invalid && contactForm.get('name')?.touched">
                  Name is required
                </div>
              </div>

              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" formControlName="email"
                       [ngClass]="{'is-invalid': contactForm.get('email')?.invalid && contactForm.get('email')?.touched}">
                <div class="invalid-feedback" *ngIf="contactForm.get('email')?.invalid && contactForm.get('email')?.touched">
                  Please enter a valid email
                </div>
              </div>

              <div class="mb-3">
                <label for="phone" class="form-label">Phone</label>
                <input type="tel" class="form-control" id="phone" formControlName="phone"
                       [ngClass]="{'is-invalid': contactForm.get('phone')?.invalid && contactForm.get('phone')?.touched}">
                <div class="invalid-feedback" *ngIf="contactForm.get('phone')?.invalid && contactForm.get('phone')?.touched">
                  Phone number is required
                </div>
              </div>

              <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" id="message" rows="4" formControlName="message"
                          [ngClass]="{'is-invalid': contactForm.get('message')?.invalid && contactForm.get('message')?.touched}"></textarea>
                <div class="invalid-feedback" *ngIf="contactForm.get('message')?.invalid && contactForm.get('message')?.touched">
                  Message is required
                </div>
              </div>

              <div class="text-center">
                <button type="submit" class="btn btn-primary" [disabled]="contactForm.invalid">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      border: none;
    }
    .card-body {
      padding: 2rem;
    }
    .btn-primary {
      padding: 0.5rem 2rem;
    }
  `]
})
export class ContactFormComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.http.post('http://localhost:8080/api/contact', this.contactForm.value)
        .subscribe({
          next: () => {
            alert('Thank you for your message! We will get back to you soon.');
            this.contactForm.reset();
          },
          error: (error) => {
            console.error('Error submitting form:', error);
            alert('There was an error submitting your message. Please try again later.');
          }
        });
    }
  }
} 