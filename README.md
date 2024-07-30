# Todo-App
A user-friendly Todo List Application for managing tasks with features like add, edit, search, and filter by date.
# Todo List Application

## Overview

This Todo List Application is a simple and user-friendly tool to manage your tasks. The app allows users to add, edit, update, and mark tasks as completed. It also includes a search function and a date filter to help users find specific tasks easily.

## System Design

### Components

1. **App Component**
   - The main component that handles the overall state of the application.
   - Manages tasks, search queries, and the visibility of the task addition form.
   - Utilizes `ToastContainer` for notifications.

2. **TaskList Component**
   - Renders a list of tasks passed down from the App component.
   - Utilizes the `Task` component to display individual tasks.

3. **Task Component**
   - Represents an individual task.
   - Allows for editing the task's title and description.
   - Provides options to mark the task as completed or undo the completion.

### Key Features

- **Add New Task**: Users can add new tasks with a title and description.
- **Edit Task**: Users can edit existing tasks.
- **Mark as Completed**: Users can mark tasks as completed or undo this action.
- **Search**: Users can search for tasks by title or description.
- **Date Filter**: Users can filter tasks by the date they were last updated.

## Implementation

### App Component (`App.js`)

- Manages the state for tasks, search query, new task form inputs, and expansion state.
- Fetches initial task data from `data.json`.
- Provides functions to add, update, and toggle tasks.
- Handles search and date filtering.
- Toggles the visibility of the new task form.

### TaskList Component (`TaskList.js`)

- Receives the list of tasks from the App component.
- Renders each task using the `Task` component.

### Task Component (`Task.js`)

- Manages its own state for editing and expanding task details.
- Provides input fields for editing task title and description.
- Handles task update and toggle actions.
- Displays the task's title, description, and last updated timestamp.

## Setup and Run the Application

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Instructions

1. **Clone the Repository**

   ```sh
   git clone https://github.com/HussainAhmad21200612/Todo-App.git
   cd Todo-App
   ```

2. **Install Dependencies**

   ```sh
   npm install
   ```

3. **Run the Application**

   ```sh
   npm start
   ```

   The application will be available at `http://localhost:3000`.

### Folder Structure

```
Todo-App/
│
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Task.js
│   │   └── TaskList.js
│   ├── data.json
│   ├── App.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

### Notes

- The application uses React for the front-end and React Toastify for notifications.
- Make sure to customize `data.json` with your initial tasks.

