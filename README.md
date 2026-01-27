# CodeCraftHub

# User Management Service

This is a user management service built with Node.js and MongoDB. It provides user registration, login, and profile retrieval functionalities.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation


1.Clone the repository:
```bash
   git clone <repository-url>
   cd user-management-service
```

2.Install dependencies:
```bash
    npm install
```

3.Create a file in the root directory and add your MongoDB connection string and JWT secret:
```bash
   // .env MONGO_URI=mongodb://<username>:<password>@localhost:27017/<dbname>
    PORT=5000
    JWT_SECRET=your_jwt_secret
```
### Running the Application
To start the server, run:
```bash
    npm start
```
Running Tests
To run the tests, use:
```bash
    npm test
```
### API Endpoints
POST: Register a new user
/api/users/register

POST: Login a user
/api/users/login

GET: Get the logged-in user's profile (requires authentication)
/api/users/profile
