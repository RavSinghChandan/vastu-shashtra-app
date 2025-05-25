import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">Vastu Shastra</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main>
      <app-home></app-home>
      <app-about></app-about>
      <app-contact-form></app-contact-form>
    </main>

    <footer class="bg-light py-4 mt-5">
      <div class="container text-center">
        <p>&copy; 2024 Vastu Shastra. All rights reserved.</p>
      </div>
    </footer>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
    }
    main {
      padding: 2rem 0;
    }
  `]
})
export class AppComponent {
  title = 'vastu-shashtra-app';
} 