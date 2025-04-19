# Tech Quiz

A full-stack MERN application that allows users to take a 10-question tech quiz and view their score. The project includes comprehensive Cypress component and end-to-end tests to ensure reliability and robustness.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Running the Tests](#running-the-tests)
- [Video Walkthrough](#video-walkthrough)
- [Repository Link](#repository-link)
- [Tech Stack](#tech-stack)
- [Contact](#contact)
- [License](#license)

## Description

The Tech Quiz app is a full-stack web application built with the MERN stack (MongoDB, Express.js, React, Node.js). It presents users with a 10-question multiple-choice quiz and displays their score at the end. Cypress is used for both component testing of the `Quiz` component and end-to-end testing of the quiz flow.

## Installation

1. **Clone the repository**  
   ```bash
   git clone <YOUR_GITHUB_REPO_URL>
   cd coding-quiz

2. **Install dependencies**
   ```bash
    npm install

3. **Set up environment variables for the server**
   ```bash
    cd server
    cp .env.EXAMPLE .env
    
Edit server/.env so it reads:
MONGODB_URI=mongodb://127.0.0.1:27017/techquiz

4. **Seed the database**

   ```bash
    npm run seed

5. **Start the development environment**
   ```bash
    cd ..
    npm run dev
    
- Server runs on http://localhost:3001

- Client runs on http://localhost:5173

## Usage

1. Open your browser to http://localhost:5173.

2. Click Start Quiz to begin.

3. Answer each question in turn.

4. When the quiz is complete, view your score and click Start New Quiz to try again.

## Running the Tests

Cypress is configured for both component and end-to-end testing.

1. Ensure the app is running:
   ```bash
    npm run dev

2. In a separate terminal, run:
   ```bash
    npm test
    This will execute all Cypress specs in headless mode.

## Video Walkthrough

[![Watch the walkthrough video]](https://app.screencastify.com/v3/watch/6yhwP48M9oioOnCMxGOO)

## Repository Link

https://github.com/JustinTylerRosado/TestingQuiz

## Tech Stack

- Frontend: React, TypeScript, Vite, Bootstrap

- Backend: Node.js, Express.js, TypeScript, Mongoose

- Database: MongoDB

- Testing: Cypress

## Contact

- GitHub: https://github.com/JustinTylerRosado
- Email: JustinTylerRosado@gmail.com

## License
This project is licensed under the MIT License.