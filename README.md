# ART NO LOGIA Backend API

REST API developed for the ART NO LOGIA platform.

This backend provides authentication, events and music release management, image uploads and all data consumed by the frontend application.

---

## Frontend Demo

🌐 https://anl-frontend.vercel.app/

---

## Frontend Repository

https://github.com/Anagarcia1995/anl-frontend

---

# About The Project

ART NO LOGIA Backend is a RESTful API built with Node.js, Express and MongoDB.

It manages all business logic for the platform, including authentication, event management, music releases, secure image uploads and communication with the database.

The API follows a modular architecture to keep controllers, routes, models and middleware organized and scalable.

---

# Main Features

## Authentication

- JWT authentication
- Password hashing with bcrypt
- Protected routes
- Admin-only endpoints

---

## Events Management

- Create events
- Update events
- Delete events
- Retrieve upcoming events
- Retrieve past events

---

## Releases Management

- Create releases
- Update releases
- Delete releases
- Featured release support
- Streaming platform links
- Cloudinary image uploads

---

## Database

- MongoDB
- Mongoose ODM
- Schema validation
- Automatic timestamps

---

## REST API

- RESTful architecture
- JSON responses
- HTTP status codes
- Centralized error handling
- Environment variables
- CORS configuration

---

## Security

- JWT verification
- Password hashing
- Protected middleware
- Secure environment variables
- Authentication middleware

---

# Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcrypt
- Cloudinary
- Multer
- dotenv
- CORS

---

# Main Dependencies

| Library | Purpose |
|----------|---------|
| Express | REST API |
| Mongoose | MongoDB ODM |
| JWT | Authentication |
| bcrypt | Password hashing |
| Multer | File uploads |
| Cloudinary | Cloud image storage |
| dotenv | Environment variables |
| CORS | Cross-origin requests |
| Nodemon | Development server |

---

# Project Structure

```text
backend
│
├── config
├── controllers
├── middleware
├── models
├── routes
├── services
├── utils
├── app.js
└── server.js
```

### config

Database and Cloudinary configuration.

### controllers

Business logic for each endpoint.

### middleware

Authentication and authorization middleware.

### models

MongoDB schemas.

### routes

REST API endpoints.

### services

Reusable business logic.

### utils

Helper functions.

---

# API Endpoints

## Authentication

- POST /auth/login
- GET /auth/me

## Events

- GET /events
- GET /events/:id
- POST /events
- PUT /events/:id
- DELETE /events/:id

## Releases

- GET /releases
- GET /releases/:id
- POST /releases
- PUT /releases/:id
- DELETE /releases/:id

---

# Installation

Clone the repository

```bash
git clone https://github.com/Anagarcia1995/anl-backend.git
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=3000
MONGO_URI=
JWT_SECRET=
FRONTEND_URL=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

Run the development server

```bash
npm run dev
```

---

# Available Scripts

```bash
npm run dev
```

Starts the development server using Nodemon.

---

```bash
npm start
```

Starts the production server.

---

# Future Improvements

- Role-based permissions
- API versioning
- Swagger documentation
- Rate limiting
- Unit testing
- Integration testing

---

# Author

Ana García

GitHub

https://github.com/Anagarcia1995

---

# Acknowledgements

This API was developed as part of a real-world full-stack application for the electronic music duo ART NO LOGIA, providing a scalable backend architecture for content management and authentication.