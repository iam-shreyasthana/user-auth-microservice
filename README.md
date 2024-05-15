# Authentication API and Privacy

## Overview

This project is built with Node.js. It includes features for user registration, login, profile management, and the ability to set profiles as public or private. Admin users can view both public and private profiles, while normal users can only access public profiles.

## Features

- User registration
- User login
- OAuth login with Google, Facebook, Twitter, or GitHub
- User logout
- Profile management (view, edit, upload photo, update details)
- Set profile as public or private
- Admin access to all profiles (public and private)
- Normal user access to only public profiles

## User Stories

1. **As a user, I can register a new account.**
2. **As a user, I can log in.**
3. **As a user, I can log in or register with at least one of the following services: Google, Facebook, Twitter, or GitHub.**
4. **As a user, I can sign out.**
5. **As a user, I can see my profile details.**
6. **As a user, I can edit my details including: photo, name, bio, phone, email, and password.**
7. **As a user, I can upload a new photo or provide an image URL.**
8. **As a user, I can choose to make my profile public or private.**
9. **As an admin user, I can see both public and private user profiles.**
10. **As a normal user, I can only see public user profiles.**

## Requirements

- **Use Node.js for the backend.**
- **Enhance the existing authentication system to include the option for users to set their profiles as public or private.**
- **Implement authorization checks to allow admin users to access both public and private profiles.**
- **Normal users should only be able to access public profiles.**
- **Ensure that private user details remain private to unauthorized users.**
- **Include endpoints for listing public profiles and retrieving user profiles based on user roles.**
- **Update the user profile editing functionality to include the option to set the profile as public or private.**
- **Implement proper error handling, validation, and security measures.**
- **Optionally, host the API on a platform like Heroku or similar.**
- **Optionally, use a library like Swagger to create an API playground for testing the API.**

## Project Structure

│ .env    
│ .gitignore    
│ server.js    
│    
├───config    
│ db.js    
│    
├───controllers    
│ authController.js    
│ profileController.js    
│     
├───middlewares    
│ authMiddleware.js    
│    
├───models    
│ User.js    
│    
└───routes     
authRoutes.js    
profileRoutes.js    


## Setup Instructions

1. **Clone the repository:**

   ```bash
  - git clone https://github.com/yourusername/enhanced-authentication-api.git
  - cd enhanced-authentication-api

2. **Install dependencies:**

  ```bash
  - npm install

3. **Create a .env file in the root directory and add the following variables:**

  - PORT=4080
  - MONGODB_URI=your_mongodb_uri
  - JWT_SECRET=your_secret_key

4. **Run the application:**

  - npm run dev

## 
Sure! Below is a comprehensive README.md file for your project that includes detailed information about the project setup, usage, and the problem statement requirements.

markdown

# Enhanced Authentication API

## Overview

This project is an enhanced authentication system built with Node.js. It includes features for user registration, login, profile management, and the ability to set profiles as public or private. Admin users can view both public and private profiles, while normal users can only access public profiles.

## Features

- User registration
- User login
- OAuth login with Google, Facebook, Twitter, or GitHub
- User logout
- Profile management (view, edit, upload photo, update details)
- Set profile as public or private
- Admin access to all profiles (public and private)
- Normal user access to only public profiles

## User Stories

1. **As a user, I can register a new account.**
2. **As a user, I can log in.**
3. **As a user, I can log in or register with at least one of the following services: Google, Facebook, Twitter, or GitHub.**
4. **As a user, I can sign out.**
5. **As a user, I can see my profile details.**
6. **As a user, I can edit my details including: photo, name, bio, phone, email, and password.**
7. **As a user, I can upload a new photo or provide an image URL.**
8. **As a user, I can choose to make my profile public or private.**
9. **As an admin user, I can see both public and private user profiles.**
10. **As a normal user, I can only see public user profiles.**

## Requirements

- **Use Node.js for the backend.**
- **Enhance the existing authentication system to include the option for users to set their profiles as public or private.**
- **Implement authorization checks to allow admin users to access both public and private profiles.**
- **Normal users should only be able to access public profiles.**
- **Ensure that private user details remain private to unauthorized users.**
- **Include endpoints for listing public profiles and retrieving user profiles based on user roles.**
- **Update the user profile editing functionality to include the option to set the profile as public or private.**
- **Implement proper error handling, validation, and security measures.**
- **Optionally, host the API on a platform like Heroku or similar.**
- **Optionally, use a library like Swagger to create an API playground for testing the API.**

## Project Structure

enhanced-authentication-api
│ .env
│ .gitignore
│ server.js
│
├───config
│ db.js
│
├───controllers
│ authController.js
│ profileController.js
│
├───middlewares
│ authMiddleware.js
│
├───models
│ User.js
│
└───routes
authRoutes.js
profileRoutes.js


## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/enhanced-authentication-api.git
   cd enhanced-authentication-api

# Install dependencies:

npm install
Create a .env file in the root directory and add the following variables:

# env

  PORT=3000
  MONGODB_URI=your_mongodb_uri
  JWT_SECRET=your_secret_key

# Run the application:
  
  npm run dev

## API Endpoints

# Auth Routes
  - POST /api/auth/register: Register a new user.
  - POST /api/auth/login: Log in a user.
  - POST /api/auth/logout: Log out a user.

# Profile Routes
  - GET /api/profile: Get the logged-in user's profile.
  - PUT /api/profile: Update the logged-in user's profile.
  - PUT /api/profile/privacy: Set the profile privacy (public/private).
  - GET /api/profile/public: List all public profiles.
  - GET /api/profile/:userId: View a specific user's profile based on access rights.


## Usage

# Register a New User

 - POST /api/auth/register
  {
    "username": "exampleUser",
    "email": "user@example.com",
    "password": "password123"
  }

# Log in a User

  - POST /api/auth/login
  {
    "email": "user@example.com",
    "password": "password123"
  }

# View User Profile

  - GET /api/profile
    Authorization: Bearer <token>

# Update User Profile

  - PUT /api/profile
    Authorization: Bearer <token>
    {
      "username": "newUsername",
      "bio": "New bio",
      "phone": "1234567890",
      "email": "newemail@example.com"
    }

# Set Profile Privacy

  - PUT /api/profile/privacy
    Authorization: Bearer <token>
    {
      "isPublic": false
    }

# List Public Profiles

  - GET /api/profile/public

# View Specific User Profile

  - GET /api/profile/:userId
    Authorization: Bearer <token>


## Security
  - Environment Variables: Store sensitive information such as database URI and JWT secret key in the .env file.
  - Password Hashing: Use bcrypt to hash user passwords.
  - JWT Authentication: Secure endpoints using JSON Web Tokens.

## Error Handling
  - Proper error handling for all endpoints to ensure meaningful error messages are returned.





