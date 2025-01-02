# Task Management App

**Backend**

`This project is a Task Management API that allows users to create, update, delete, and retrieve tasks. The API includes user authentication and task management features like priority levels, due dates, tags, and status.`

## Table of Contents

- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [API Endpoints](#api-endpoints)
- [Task Model](#task-model)
- [Task Controller](#task-controller)

---

## Technologies Used

- **Node.js**: Backend framework.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database used to store tasks and user data.
- **Mongoose**: ODM for MongoDB used to define the task schema.
- **JWT**: JSON Web Token for user authentication.
- **Bcrypt.js**: For password hashing.

---

## Setup Instructions

### Prerequisites

- Node.js and npm installed on your system.
- MongoDB database (you can use MongoDB Atlas for a cloud-based DB).
- A code editor (e.g., Visual Studio Code).

### Steps to Run the Project

1. **Clone the repository**:
   ```bash
   git clone <repository_url>
   cd task-management-api
   ```
2. **Install dependecies**

```
npm install
```

3. **Set up environment variables: Create a .env file in the root directory with the following values:\***

```
MONGODB_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret_key>
PORT=8000
NODE_ENV=development
```

4. **_Run the server:_**
   nodemon

# API Endpoints

### Authentication Endpoints

- **POST /api/auth/register**

  - Registers a new user.
  - **Request body**:
    - `username`: User's username.
    - `email`: User's email.
    - `password`: User's password.
  - **Response**:
    - `200 OK`: User successfully registered.
    - `400 Bad Request`: Missing required fields.

- **POST /api/auth/login**
  - Logs in a user and returns a JWT token.
  - **Request body**:
    - `email`: User's email.
    - `password`: User's password.
  - **Response**:
    - `200 OK`: JWT token returned for successful login.
    - `401 Unauthorized`: Invalid credentials.

### Task Endpoints

- **POST /api/tasks**

  - Creates a new task.
  - **Request body**:
    - `title`: Task title (required).
    - `description`: Task description (optional).
    - `dueDate`: Task due date (required).
    - `priority`: Task priority (`Low`, `Medium`, `High`, `Critical`).
    - `status`: Task status (`To Do`, `In progress`, `Completed`, `Archived`).
    - `tags`: Tags associated with the task (optional).
  - **Response**:
    - `201 Created`: Task created successfully.
    - `400 Bad Request`: Missing required fields.

- **GET /api/tasks**

  - Retrieves all tasks for the logged-in user.
  - **Response**:
    - A list of tasks sorted by due date.
    - `200 OK`: List of tasks.

- **PUT /api/tasks/:id**

  - Updates an existing task.
  - **Request body**:
    - Any fields from the task model to update.
  - **Response**:
    - `200 OK`: Task updated successfully.
    - `400 Bad Request`: Invalid task ID or update data.
    - `404 Not Found`: Task not found.

- **DELETE /api/tasks/:id**
  - Deletes a task by its ID.
  - **Response**:
    - `200 OK`: Task deleted successfully.
    - `404 Not Found`: Task not found.
