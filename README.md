# Anshflix

## Description

AnshFlix is a web application that allows users to search, discover, and watch their favorite movies and TV shows. It features a user-friendly interface, personalized recommendations, and a wide selection of content from various streaming services. Users can create their own watchlist, rate movies and TV shows, and leave reviews.

## Features:

- Search for movies and TV shows by title, genre, year, and more
- Discover new content with personalized recommendations
- Watch movies and TV shows from various streaming services
- Create your own watchlist
- Rate movies and TV shows
- Leave reviews
- Sign in with Google or Facebook

## Setting Up Your Local Machine:

### 1. Install Node.js and pnpm

To run this project locally, you'll need to have Node.js and pnpm installed on your machine.

#### Node.js

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It's required to execute JavaScript code outside of a web browser, including running scripts and building applications.

- **Installation:**

  - Visit the [official Node.js website](https://nodejs.org/).
  - Download the installer for your operating system (Windows, macOS, or Linux).
  - Follow the installation instructions provided on the website.

- **Verification:**
  - After installation, open your terminal or command prompt.
  - Run the following command to verify that Node.js is installed:
    ```
    node -v
    ```
  - You should see the version number of Node.js printed in the terminal.

#### pnpm

pnpm is a fast, disk-space-efficient package manager for JavaScript projects. It's compatible with npm and yarn, but it optimizes the package installation process by using a single store for all dependencies.

- **Installation:**

  - After installing Node.js, open your terminal or command prompt.
  - Run the following command to install pnpm globally:
    ```
    npm install -g pnpm
    ```

- **Verification:**
  - After installation, run the following command to verify that pnpm is installed:
    ```
    pnpm -v
    ```
  - You should see the version number of pnpm printed in the terminal.

Once Node.js and pnpm are installed and verified, you're ready to set up and run the project locally.

### 2. Clone the Repository:

- Open your terminal and clone the AnshFlix repository:

  ```
  git clone https://github.com/anshroshan/cineflix.git
  cd cineflix
  ```

## Frontend

The frontend of Anshflix is developed using modern web technologies including React, Redux, React Router, and Material-UI. It provides a user-friendly interface for browsing and watching content. Key dependencies include:

- React: A JavaScript library for building user interfaces.
- React Router DOM: Declarative routing for React.
- Redux: A predictable state container for JavaScript apps.
- Material-UI: A popular React UI framework providing pre-designed components.
- Axios: A promise-based HTTP client for making requests to the backend.
- Formik: A form library for React that helps with form validation and management.
- Swiper: A modern touch slider library.
- React Toastify: A React library for toast notifications.
- Dayjs: A lightweight alternative to Moment.js for parsing, validating, manipulating, and displaying dates and times.
- Yup: A schema validation library.

### 3. Install Dependencies:

- Navigate to the AnshFlix directory and install the required dependencies:

  ```
  cd client
  pnpm i
  ```

### 4. Start the Development Server:

- To start the development server, run the following command:

  ```
  pnpm run dev
  ```

### 5. Open the Application:

- Once the development server is running, you can open the application in your browser by visiting [http://localhost:3000](http://localhost:3000).

### Note:

- If you are using a different port for the development server, replace `3000` with the appropriate port number.

## Backend:

### 1. Create a `.env.local` File:

- Create a `.env.local` file in the Chalchitra-Backend directory and add the following environment variables:

  ```
  MONGODB_URL=
  PORT=
  TOKEN_SECRET_KEY=
  TMDB_BASE_URL=
  TMDB_KEY=
  ```

- Rename the `.env.example` into `.env.local` file

### 2. Install Dependencies:

- Navigate to the AnshFlix directory and install the required dependencies:

  ```
  cd server
  pnpm i
  ```

### 3. **Start the Development Server:**

- To start the development server, run the following command:

  ```
  pnpm run dev
  ```

### 4. **Open the Application:**

Once the development server is running, you can open the application in your browser by visiting [http://localhost:5000](http://localhost:5000).
