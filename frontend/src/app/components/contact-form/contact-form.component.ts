import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  template: `
    <section id="contact" class="py-5">
      <div class="container">
        <h2 class="text-center mb-5">Contact Us</h2>
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="card">
              <div class="card-body">
                <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
                  <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      formControlName="name"
                      [ngClass]="{'is-invalid': submitted && f['name'].errors}"
                    >
                    <div *ngIf="submitted && f['name'].errors" class="invalid-feedback">
                      <div *ngIf="f['name'].errors['required']">Name is required</div>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      formControlName="email"
                      [ngClass]="{'is-invalid': submitted && f['email'].errors}"
                    >
                    <div *ngIf="submitted && f['email'].errors" class="invalid-feedback">
                      <div *ngIf="f['email'].errors['required']">Email is required</div>
                      <div *ngIf="f['email'].errors['email']">Email is invalid</div>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="message" class="form-label">Message</label>
                    <textarea
                      class="form-control"
                      id="message"
                      rows="4"
                      formControlName="message"
                      [ngClass]="{'is-invalid': submitted && f['message'].errors}"
                    ></textarea>
                    <div *ngIf="submitted && f['message'].errors" class="invalid-feedback">
                      <div *ngIf="f['message'].errors['required']">Message is required</div>
                    </div>
                  </div>

                  <div class="text-center">
                    <button type="submit" class="btn btn-primary" [disabled]="loading">
                      <span *ngIf="loading" class="spinner-border spinner-border-sm me-2"></span>
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .card {
      border: none;
      box-shadow: 0 2px 15px rgba(0,0,0,0.1);
    }
    .form-control:focus {
      border-color: #4a90e2;
      box-shadow: 0 0 0 0.2rem rgba(74, 144, 226, 0.25);
    }
  `]
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  get f() { return this.contactForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    this.loading = true;
    this.http.post('/api/contact', this.contactForm.value)
      .subscribe({
        next: () => {
          alert('Message sent successfully!');
          this.contactForm.reset();
          this.submitted = false;
          this.loading = false;
        },
        error: (error) => {
          console.error('Error sending message:', error);
          alert('Error sending message. Please try again.');
          this.loading = false;
        }
      });
  }
} 