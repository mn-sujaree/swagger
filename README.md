# Swagger App with SQLite

This is a simple Swagger application API built with Node.js, Express, and SQLite. It provides CRUD (Create, Read, Update, Delete) operations for managing TODO tasks, with API documentation powered by Swagger.

## Features
- Create a new TODO
- Retrieve all TODOs
- Update an existing TODO
- Delete a TODO
- Interactive API documentation with Swagger UI

## Prerequisites
- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/swagger.git
   cd swagger
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create the SQLite database:
   ```bash
   mkdir db
   ```

   The database file will be automatically created and initialized when the server starts.

## Usage

1. Start the server:
   ```bash
   node app.js
   ```

2. The server will run at `http://localhost:3000`

3. Access the Swagger documentation:
   - Visit: `http://localhost:3000/api-docs`

### API Endpoints

#### Create a TODO
- **POST** `/todos`
- **Request Body:**
  ```json
  {
    "title": "Learn Node.js",
    "description": "Start with basic tutorials"
  }
  ```
- **Response:**
  ```json
  {
    "id": 1,
    "title": "Learn Node.js",
    "description": "Start with basic tutorials",
    "completed": false
  }
  ```

#### Get All TODOs
- **GET** `/todos`
- **Response:**
  ```json
  [
    {
      "id": 1,
      "title": "Learn Node.js",
      "description": "Start with basic tutorials",
      "completed": false
    }
  ]
  ```

#### Update a TODO
- **PUT** `/todos/:id`
- **Request Body:**
  ```json
  {
    "title": "Learn Express.js",
    "description": "Build REST APIs",
    "completed": true
  }
  ```
- **Response:**
  ```json
  {
    "id": 1,
    "title": "Learn Express.js",
    "description": "Build REST APIs",
    "completed": true
  }
  ```

#### Delete a TODO
- **DELETE** `/todos/:id`
- **Response:**
  - Status Code: `204 No Content`

## Project Structure
```
swagger/
├── db/
│   └── database.js       # SQLite database connection and setup
├── routes/
│   ├── todoRoutes.js     # API routes for TODOs
│   └── swagger.js        # Swagger configuration
├── app.js                # Main application file
├── package.json          # Project metadata and dependencies
└── README.md             # Project documentation
```