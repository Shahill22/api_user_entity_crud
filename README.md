# Node.js Express API with Sequelize - User Cred Operations

This is a Node.js Express application that provides APIs for performing user credential operations using Sequelize as the ORM (Object-Relational Mapping). The API allows you to create, read, update, and delete user credentials.

# Note : Code located at master branch (change branch to master)

## Requirements

- Node.js (https://nodejs.org/)
- npm (Node Package Manager, comes bundled with Node.js)

## Getting Started

1. Clone the repository:

   bash
   git clone -b master https://github.com/your-username/your-repo.git
   

2. Install dependencies:

   bash
   cd your-repo
   npm install
   

3. Database Setup:
   - The application uses SQLite as the default database. No additional setup is required for SQLite. The database file will be created automatically.
   - If you want to use a different database (e.g., MySQL, PostgreSQL), update the dialect accordingly. You may need to install the corresponding database driver/package (`sequelize` already supports various databases).

4. Start the server:

   bash
   npm start
   

   The server will start, and you should see the message "Server is running on port 3000" in the console.

## API Endpoints

The following endpoints are available in the API:

- `POST /v1/users`: Create a new user.
- `GET /v1/users/:id`: Get a single user by ID.
- `PATCH /v1/users/:id`: Update a user by ID.
- `DELETE /v1/users/:id`: Soft delete a user by ID.
- `DELETE /v1/users/hdelete/:id`: Hard delete a user by ID.

The request and response formats are in JSON.
