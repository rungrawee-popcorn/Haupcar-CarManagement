# Haupcar Car Management System

## Project Description

Haupcar Car Management System is a web application for managing company vehicles.

The system allows users to view, add, edit, and delete vehicle information with pagination, form validation, and soft delete functionality.

## Tech Stack

Frontend:

- React
- Vite
- JavaScript
- Bootstrap
- Axios
- React Router

Backend:

- Node.js
- Express.js

Database:

- Microsoft SQL Server

## Features

### Car Management

- Display all cars
- Add new cars
- Edit car information
- Delete cars using soft delete
- Pagination with 10 records per page

### Form Validation

- Required field validation
- Show validation messages when required fields are empty
- Prevent saving incomplete car information

### Delete Functionality

- Confirmation before deleting data
- Soft delete implementation using DeletedAt column
- Deleted records are hidden from the car list

## Database Setup

Database Name: HaupcarDB

Table Name: Cars

Table Columns:

- CarId
- LicensePlate
- Brand
- Model
- Note
- CreatedAt
- UpdatedAt
- DeletedAt

## Installation

Backend:

1. Open terminal and go to the server folder.
2. Install dependencies using npm install.
3. Configure database connection in the .env file.
4. Run the backend server using npm run dev.

Frontend:

1. Open terminal and go to the client folder.
2. Install dependencies using npm install.
3. Run the React application using npm run dev.

## Environment Configuration

The backend requires database configuration in the .env file:

DB_SERVER=localhost  
DB_DATABASE=HaupcarDB  
DB_PORT=1433

## Application URLs

Backend:
http://localhost:3000

Frontend:
http://localhost:5173

## API Endpoints

GET /api/cars  
Get all cars

GET /api/cars/:id  
Get car by id

POST /api/cars  
Create new car

PUT /api/cars/:id  
Update car information

DELETE /api/cars/:id  
Soft delete car
