import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <section id="about" class="py-5">
      <div class="container">
        <h2 class="text-center mb-5">About Vastu Shastra</h2>
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <div class="card-body">
                <h3 class="card-title h5">Ancient Wisdom</h3>
                <p class="card-text">
                  Vastu Shastra is an ancient Indian science of architecture and design that dates back thousands of years.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <div class="card-body">
                <h3 class="card-title h5">Harmony & Balance</h3>
                <p class="card-text">
                  It focuses on creating harmony between nature and living spaces through proper alignment and design.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <div class="card-body">
                <h3 class="card-title h5">Modern Application</h3>
                <p class="card-text">
                  Today, Vastu principles are applied to modern architecture to create balanced and prosperous living spaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .card {
      transition: transform 0.3s ease;
      border: none;
      box-shadow: 0 2px 15px rgba(0,0,0,0.1);
    }
    .card:hover {
      transform: translateY(-5px);
    }
    .card-title {
      color: #4a90e2;
    }
  `]
})
export class AboutComponent {} 