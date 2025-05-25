# Technical Specifications

## 1. System Architecture

### 1.1 Technology Stack
- **Frontend**: Angular 16.x
- **Backend**: Spring Boot 3.x
- **Database**: PostgreSQL
- **Containerization**: Docker & Kubernetes
- **CI/CD**: GitHub Actions
- **Cloud Provider**: AWS/GCP/Azure
- **CDN**: CloudFront/Akamai
- **Monitoring**: Prometheus + Grafana
- **Logging**: ELK Stack

### 1.2 Component Architecture
```
vastu-shashtra-app/
├── frontend/                 # Angular application
│   ├── src/
│   │   ├── app/
│   │   │   ├── core/        # Singleton services, guards, interceptors
│   │   │   ├── shared/      # Shared components, pipes, directives
│   │   │   └── features/    # Feature modules
│   │   └── assets/         # Static assets
│   └── package.json
│
├── backend/                  # Spring Boot application
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/vastu/
│   │   │   │       ├── config/      # Configuration
│   │   │   │       ├── controller/  # REST endpoints
│   │   │   │       ├── service/     # Business logic
│   │   │   │       ├── repository/  # Data access
│   │   │   │       ├── model/       # Entity classes
│   │   │   │       └── security/    # Security config
│   │   │   └── resources/   # Configuration files
│   │   └── test/           # Unit & integration tests
│   └── pom.xml
│
└── k8s/                     # Kubernetes configurations
    ├── frontend/
    ├── backend/
    ├── database/
    └── monitoring/
```

### 1.3 Microservices Architecture
- **User Service**: Authentication and user management
- **Consultation Service**: Booking and scheduling
- **Property Service**: Property analysis and reports
- **Payment Service**: Payment processing
- **Notification Service**: Email and SMS notifications
- **Content Service**: Blog and article management
- **Analytics Service**: Usage and performance metrics

## 2. Frontend Architecture

### 2.1 Angular Application Structure
```
frontend/src/app/
├── core/                      # Singleton services, guards, interceptors
│   ├── guards/
│   │   ├── auth.guard.ts
│   │   └── role.guard.ts
│   ├── interceptors/
│   │   ├── auth.interceptor.ts
│   │   └── error.interceptor.ts
│   └── services/
│       ├── auth.service.ts
│       └── api.service.ts
├── shared/                    # Shared components, pipes, directives
│   ├── components/
│   │   ├── header/
│   │   ├── footer/
│   │   └── loading/
│   ├── pipes/
│   └── directives/
└── features/                  # Feature modules
    ├── auth/
    ├── consultation/
    ├── property/
    └── admin/
```

### 2.2 State Management
- NgRx for global state
- Services with BehaviorSubject for component state
- Local storage for persistence
- IndexedDB for offline data

### 2.3 Performance Optimizations
- Lazy loading modules
- Preloading strategies
- Service workers for caching
- Image optimization pipeline
- Tree-shaking enabled
- AOT compilation
- Bundle size optimization

## 3. Backend Architecture

### 3.1 Spring Boot Structure
```
backend/src/main/java/com/vastu/
├── config/
│   ├── SecurityConfig.java
│   ├── SwaggerConfig.java
│   └── WebSocketConfig.java
├── controller/
│   ├── AuthController.java
│   ├── ConsultationController.java
│   └── PropertyController.java
├── service/
│   ├── impl/
│   └── interfaces/
├── repository/
├── model/
│   ├── entity/
│   └── dto/
└── security/
    ├── JwtTokenProvider.java
    └── UserDetailsServiceImpl.java
```

### 3.2 Database Schema
```sql
-- Users Table
CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Consultations Table
CREATE TABLE consultations (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT REFERENCES users(id),
    expert_id BIGINT REFERENCES users(id),
    status VARCHAR(50) NOT NULL,
    scheduled_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Properties Table
CREATE TABLE properties (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT REFERENCES users(id),
    name VARCHAR(255) NOT NULL,
    address TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Performance Indexes
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_consultations_user_id ON consultations(user_id);
CREATE INDEX idx_consultations_expert_id ON consultations(expert_id);
CREATE INDEX idx_properties_user_id ON properties(user_id);
```

### 3.3 API Endpoints
```yaml
/api/v1/auth:
  post:
    /login:
      summary: User login
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                email:
                  type: string
                password:
                  type: string
    /register:
      summary: User registration
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                email:
                  type: string
                password:
                  type: string
                name:
                  type: string

/api/v1/consultations:
  get:
    summary: Get user consultations
    parameters:
      - name: status
        in: query
        schema:
          type: string
  post:
    summary: Create consultation
    requestBody:
      content:
        application/json:
          schema:
            type: object
            properties:
              expertId:
                type: integer
              scheduledAt:
                type: string
                format: date-time
```

## 4. DevOps Pipeline

### 4.1 CI/CD Pipeline
```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Set up JDK
        uses: actions/setup-java@v2
        with:
          java-version: '17'
      - name: Build with Maven
        run: mvn -B package --file pom.xml
      - name: Run Tests
        run: mvn test

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - name: Build Docker images
        run: |
          docker build -t vastu-backend:${GITHUB_SHA} ./backend
          docker build -t vastu-frontend:${GITHUB_SHA} ./frontend

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to Kubernetes
        run: |
          kubectl apply -f k8s/backend/
          kubectl apply -f k8s/frontend/
```

### 4.2 Monitoring Setup
```yaml
# Prometheus Configuration
global:
  scrape_interval: 15s
  evaluation_interval: 15s

scrape_configs:
  - job_name: 'spring-boot-app'
    metrics_path: '/actuator/prometheus'
    static_configs:
      - targets: ['localhost:8080']

  - job_name: 'node-exporter'
    static_configs:
      - targets: ['localhost:9100']
```

## 5. Security Implementation

### 5.1 JWT Configuration
```java
@Configuration
public class JwtConfig {
    @Value("${jwt.secret}")
    private String secret;
    
    @Value("${jwt.expiration}")
    private Long expiration;
    
    @Bean
    public JwtTokenProvider jwtTokenProvider() {
        return new JwtTokenProvider(secret, expiration);
    }
}
```

### 5.2 Security Headers
```java
@Configuration
public class SecurityHeadersConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) {
        return http
            .headers()
                .xssProtection()
                .and()
                .contentSecurityPolicy("default-src 'self'")
                .and()
                .frameOptions()
                .deny()
                .and()
            .build();
    }
}
```

## 6. Performance Optimization

### 6.1 Caching Strategy
```java
@Configuration
@EnableCaching
public class CacheConfig {
    @Bean
    public CacheManager cacheManager() {
        RedisCacheManager.RedisCacheManagerBuilder builder = RedisCacheManager
            .RedisCacheManagerBuilder
            .fromConnectionFactory(redisConnectionFactory());
            
        return builder
            .cacheDefaults(defaultConfig())
            .withCacheConfiguration("users", userConfig())
            .withCacheConfiguration("properties", propertyConfig())
            .build();
    }
}
```

## 7. Error Handling

### 7.1 Global Exception Handler
```java
@ControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleException(Exception ex) {
        ErrorResponse error = new ErrorResponse(
            HttpStatus.INTERNAL_SERVER_ERROR.value(),
            ex.getMessage()
        );
        return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
```

### 7.2 Error Response Structure
```json
{
  "timestamp": "2024-03-20T10:00:00Z",
  "status": 500,
  "error": "Internal Server Error",
  "message": "Error message",
  "path": "/api/v1/resource"
}
``` 