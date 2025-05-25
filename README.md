# Vastu Shastra Application

A modern web application that showcases Vastu Shastra principles with a beautiful landing page and contact form.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Running the Application](#running-the-application)
4. [Accessing the Application](#accessing-the-application)
5. [Troubleshooting](#troubleshooting)
6. [Project Structure](#project-structure)

## Prerequisites

Before you begin, make sure you have the following installed on your computer:

1. **Node.js and npm**
   - Download and install from: https://nodejs.org/
   - Choose the LTS (Long Term Support) version
   - To verify installation, open terminal/command prompt and type:
     ```bash
     node --version
     npm --version
     ```

2. **Java Development Kit (JDK) 17**
   - Download and install from: https://adoptium.net/
   - Choose version 17 (LTS)
   - To verify installation, open terminal/command prompt and type:
     ```bash
     java --version
     ```

3. **Docker and Docker Compose** (for production deployment)
   - Download and install from: https://www.docker.com/products/docker-desktop
   - To verify installation, open terminal/command prompt and type:
     ```bash
     docker --version
     docker-compose --version
     ```

## Installation

### Step 1: Clone the Repository
1. Open terminal/command prompt
2. Navigate to where you want to store the project
3. Run the following command:
   ```bash
   git clone https://github.com/your-username/vastu-shashtra-app.git
   cd vastu-shashtra-app
   ```

### Step 2: Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Step 3: Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd ../backend
   ```
2. The application uses Maven wrapper, so no need to install Maven separately
3. Wait for the dependencies to download (this might take a few minutes)

## Running the Application

### Development Mode

#### Option 1: Run Frontend and Backend Separately

1. **Start the Backend**
   - Open a terminal/command prompt
   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Run the application:
     ```bash
     # On Windows
     mvnw.cmd spring-boot:run

     # On Mac/Linux
     ./mvnw spring-boot:run
     ```
   - Wait until you see "Started VastuApplication" in the console

2. **Start the Frontend**
   - Open another terminal/command prompt
   - Navigate to the frontend directory:
     ```bash
     cd frontend
     ```
   - Run the application:
     ```bash
     npm start
     ```
   - Wait until you see "** Angular Live Development Server is listening on localhost:4200"

#### Option 2: Run with Docker (Production Mode)

1. Open terminal/command prompt
2. Navigate to the project root directory
3. Run the following command:
   ```bash
   docker-compose up --build
   ```
4. Wait for both frontend and backend to start (this might take a few minutes)

## Accessing the Application

### Development Mode
- Frontend: Open your browser and go to http://localhost:4200
- Backend API: http://localhost:8080
- H2 Database Console: http://localhost:8080/h2-console
  - JDBC URL: jdbc:h2:mem:vastudb
  - Username: sa
  - Password: password

### Production Mode (Docker)
- Frontend: Open your browser and go to http://localhost
- Backend API: http://localhost:8080

## Troubleshooting

### Common Issues and Solutions

1. **Port Already in Use**
   - If you see "Port 4200 is already in use" or "Port 8080 is already in use"
   - Solution: Close other applications using these ports or change the ports in the configuration

2. **Node Modules Issues**
   - If you see errors related to node_modules
   - Solution: Delete the node_modules folder and run `npm install` again

3. **Java Version Issues**
   - If you see "Unsupported class file major version"
   - Solution: Make sure you have Java 17 installed and it's set as your default Java version

4. **Docker Issues**
   - If Docker containers fail to start
   - Solution: Make sure Docker Desktop is running and try `docker-compose down` before `docker-compose up --build`

## Project Structure

```
vastu-shashtra-app/
├── frontend/           # Angular application
│   ├── src/           # Source code
│   ├── package.json   # Dependencies
│   └── Dockerfile     # Frontend container configuration
├── backend/           # Spring Boot application
│   ├── src/          # Source code
│   ├── pom.xml       # Dependencies
│   └── Dockerfile    # Backend container configuration
└── docker-compose.yml # Container orchestration
```

## Features

1. **Landing Page**
   - Modern, responsive design
   - About section with cards
   - Smooth scrolling navigation

2. **Contact Form**
   - Name, email, and message fields
   - Form validation
   - Success/error notifications

3. **Backend API**
   - RESTful endpoints
   - Data persistence
   - Input validation

## Support

If you encounter any issues or have questions:
1. Check the troubleshooting section above
2. Look for similar issues in the project's issue tracker
3. Create a new issue with detailed information about your problem

## License

This project is licensed under the MIT License - see the LICENSE file for details. 