# User Management Application (React CRUD)

**Live Demo:** [https://crud-nxfl6itb6-prajwalkapade123s-projects.vercel.app](https://crud-nxfl6itb6-prajwalkapade123s-projects.vercel.app)

A modern, responsive User Management Application built with React, Vite, and Tailwind CSS. This application demonstrates Create, Read, Update, and Delete (CRUD) operations using the [DummyJSON API](https://dummyjson.com/docs/users).

## Features

- **User List:** View a list of users fetched from the API with options to search by name and filter by role.
- **Add User:** Create a new user with form validations (required fields, valid email, 10-digit phone number).
- **Edit User:** Update details for an existing user. Data is pre-filled from the API.
- **User Details:** A beautiful read-only profile view of a specific user.
- **Delete User:** Remove a user securely with a confirmation modal.
- **Indian Names Integration:** Seamlessly transforms default DummyJSON API user names into localized Indian names deterministically across all pages.
- **Responsive Design:** Fully responsive layout with a clean, premium aesthetic styled via Tailwind CSS.
- **Interactive UI:** Includes loading spinners, disabled buttons during API calls, and success/error toast notifications.

## Tech Stack

- **React** (v18 with Hooks)
- **Vite** (Next Generation Frontend Tooling)
- **Tailwind CSS** (Utility-first CSS Framework)
- **React Router v6** (Client-side routing)
- **Axios** (Promise based HTTP client)
- **Lucide React** (Beautiful SVG icons)
- **React Hot Toast** (Smoking hot notifications)

## Prerequisites

- Node.js (v16 or higher recommended)
- npm

## Getting Started

1. **Navigate to the Project Directory:**
   Open your terminal (Command Prompt, Git Bash, or PowerShell) and navigate to the project directory:
   ```bash
   cd d:\MyWork\CRUD_UMS
   ```

2. **Install Dependencies:**
   Install the required Node packages:
   ```bash
   npm install
   ```

3. **Start the Development Server:**
   Run the following command to start Vite's local development server:
   ```bash
   npm run dev
   ```

4. **View in Browser:**
   Once the server starts, it will give you a local URL. Open [http://localhost:5173](http://localhost:5173) in your web browser to view the application.

## API Note

This application relies on the public [DummyJSON API](https://dummyjson.com/) for mock backend responses.
> **Note:** The DummyJSON API allows `POST`, `PUT`, and `DELETE` requests but **does not permanently save** the modifications to their database. The application's UI will simulate a successful response during your current session (showing toast notifications and updating state where applicable), but fetching the data again from the server will return the original mock data.
