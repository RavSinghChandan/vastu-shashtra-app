import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section id="home" class="py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h1 class="display-4 fw-bold mb-4">Welcome to Vastu Shastra</h1>
            <p class="lead mb-4">
              Discover the ancient science of architecture and design that brings harmony and prosperity to your living spaces.
            </p>
            <a href="#contact" class="btn btn-primary btn-lg">Get Started</a>
          </div>
          <div class="col-lg-6">
            <img src="assets/images/vastu-home.jpg" alt="Vastu Shastra" class="img-fluid rounded shadow">
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    section {
      background-color: #f8f9fa;
    }
    .btn-primary {
      background-color: #4a90e2;
      border-color: #4a90e2;
    }
    .btn-primary:hover {
      background-color: #357abd;
      border-color: #357abd;
    }
  `]
})
export class HomeComponent {} 