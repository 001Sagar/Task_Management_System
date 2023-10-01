# Task Management System RESTful API


`Task Management System` This repository contains the source code for a RESTful API built for a Task Management System using Node.js, TypeScript, PostgreSQL, Fastify, and Firebase Functions. The goal of this project is to provide a well-structured backend API for managing tasks, enabling users to create, read, update, and delete tasks.

## Installation

Get started quickly by installing the package using npm:
npm install


### Features :
`Task CRUD Operations`: Users can perform the following operations on tasks:
Create a new task
Retrieve task details
Update task information
Delete a task


### Relational Database: 
Tasks are stored in a PostgreSQL database, allowing for efficient data management and retrieval.

### API Documentation :
For detailed information on how to use the API, refer to the API documentation. You can access the documentation at: `http://localhost:3000/docs`

### Database Schema : 
You have to create a Database in your Postgresql which is `Tasks` then you have to createa table name `Task` the create a schema which is 
`create table Task(task_id int not null Primary key, task_name varchar not null,description varchar not null)` . Then, You have successfully create the database


### start :
You can start the server by using this command `npm start`

## License
node-cron is under [ISC License](https://github.com/001Sagar/Task_Management_System/blob/master/LICENSE.md).
