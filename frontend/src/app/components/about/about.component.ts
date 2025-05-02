import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h1 class="text-center mb-4">About Vastu Shastra Services</h1>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Welcome to Our Services</h5>
            <p class="card-text">
              Vastu Shastra is an ancient Indian science of architecture and design that aims to create harmonious living spaces.
              Our expert consultants provide personalized Vastu solutions for homes, offices, and commercial spaces.
            </p>
            <p class="card-text">
              With years of experience and deep knowledge of Vastu principles, we help you create spaces that promote
              positive energy, prosperity, and well-being.
            </p>
            <div class="mt-4">
              <h5>Our Services Include:</h5>
              <ul>
                <li>Residential Vastu Consultation</li>
                <li>Commercial Space Vastu Analysis</li>
                <li>Vastu Remedies and Solutions</li>
                <li>Property Selection Guidance</li>
                <li>Interior Design Recommendations</li>
              </ul>
            </div>
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
    ul {
      list-style-type: none;
      padding-left: 0;
    }
    li {
      margin-bottom: 0.5rem;
      padding-left: 1.5rem;
      position: relative;
    }
    li:before {
      content: "•";
      color: #007bff;
      position: absolute;
      left: 0;
    }
  `]
})
export class AboutComponent { } 