# React Task Manager

A simple Task Management Application built with React.

## Table of Contents

- [Project Structure](#project-structure)
- [Design Choices](#design-choices)
- [Features](#features)
- [Setup and Run](#setup-and-run)

## Project Structure

The project follows a basic React application structure created with `create-react-app`:

- `src/`
  - `App.js`: Main component managing state and rendering other components.
  - `AddTask.js`: Component for rendering the list of tasks and add tasks.
  - `Card.js`: Component for rendering tasks.
  - `CustomButton.js`: Component for rendering buttons.
  - `CustomInput.js`: Component for rendering Input fields.
  - `Header.js`: Component for rendering headers.
  - `App.js`: Entry point for the React application.
  - `App.css`: Component for ad styling.
- `public/`: Public assets and HTML template.
- `node_modules/`: Node.js dependencies.
- `package.json`: Project configuration file.

## Design Choices

The application consists of several components:

- **App Component:** Manages the state of tasks and provides functions for CRUD operations.
- **TaskList Component:** Displays the list of tasks and add tasks.

The application uses the `useState` hook for state management and simple CSS for styling.

## Features

- Add new tasks.
- Edit existing tasks.
- Delete tasks.
- Mark tasks as completed.
- Basic styling for a clear user interface.

## Setup and Run

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Shreyask24/Daily-Task-Manager.git
   cd react-task-manager
   npm install
   npm start

The application will be accessible at http://localhost:3000 in your web browser.

3. Usage:

  Open the application in your browser.
  Use the form to add new tasks.
  Tasks can be edited, deleted, and marked as completed.

4. Additional Notes:

  Customize the application further based on your needs.
  
  Feel free to enhance the project and contribute!

Also I have uploaded the PDF which includes Question 1 which was assigned.

