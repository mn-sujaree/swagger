# TODO App with SQLite

This is a simple TODO application API built with Node.js, Express, and SQLite. It provides CRUD (Create, Read, Update, Delete) operations for managing TODO tasks.

## Features
- Create a new TODO
- Retrieve all TODOs
- Update an existing TODO
- Delete a TODO

## Prerequisites
- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
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
│   └── todoRoutes.js     # API routes for TODOs
├── app.js                # Main application file
├── package.json          # Project metadata and dependencies
└── README.md             # Project documentation
```

---
