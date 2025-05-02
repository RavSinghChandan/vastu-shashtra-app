# Vastu Shastra Reading Services

A full-stack web application for Vastu Shastra reading services, built with Spring Boot, Angular, and MySQL.

## Project Structure

```
vastu-shashtra-app/
├── backend/           # Spring Boot application
├── frontend/          # Angular application
└── README.md
```

## Features

- About page with service information
- Contact form for service inquiries
- Modern, responsive UI
- Secure backend API
- MySQL database integration

## Prerequisites

- Java 17 or higher
- Node.js 18 or higher
- Angular CLI
- MySQL 8.0 or higher
- Maven

## Getting Started

### Backend Setup

1. Navigate to the backend directory
2. Configure MySQL connection in `application.properties`
3. Run the application:
   ```bash
   mvn spring-boot:run
   ```

### Frontend Setup

1. Navigate to the frontend directory
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   ng serve
   ```

## Technology Stack

- **Backend**: Spring Boot 3.x
- **Frontend**: Angular 17
- **Database**: MySQL 8.0
- **Build Tools**: Maven, npm

## API Documentation

The backend API documentation will be available at `http://localhost:8080/swagger-ui.html` when the application is running.

## License

This project is licensed under the MIT License.
