# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Here’s a complete README.md draft for Task 1 of your project, Lucy. It captures all objectives (authentication, database interaction, frontend integration, deployment, performance optimization) and includes GitHub deployment notes with .env handling.

Event Booking System – Task 1
📌 Overview
This project is a full‑stack application built with the PERN stack (Postgres, Express, React, Node).
It includes user authentication, database interaction, and frontend integration, forming the foundation for event booking, ticketing, and chat features.

🎯 Objectives
- Develop a fully integrated web application.
- Implement user authentication and role‑based access control.
- Deploy both frontend and backend to GitHub.
- Ensure performance optimization and maintainability.
- Protect sensitive environment variables (.env) from being committed.

🛠️ Tech Stack
- Backend: Node.js, Express, Apollo Server (GraphQL), Sequelize ORM, PostgreSQL
- Frontend: React, Axios, Thunder Client (for API testing)
- Authentication: JWT (JSON Web Tokens)
- Deployment: GitHub (with .gitignore for .env)

🔐 Authentication Flow
- Register Mutation
mutation {
  register(name: "Lucy Hoka", email: "lucy@example.com", password: "123456") {
    id
    name
    email
    role
  }
}
- Creates a new user in the database.
- Email must be unique.
- Login Mutation
mutation {
  login(email: "lucy@example.com", password: "123456")
}
- Returns a JWT token.
- Authorization Header
- Add JWT to requests:
Authorization: Bearer <your_token>
- Me Query
query {
  me {
    id
    name
    email
    role
  }
}


- Returns the logged‑in user.

🗄️ Database Interaction
- User Model: id, name, email (unique), password (hashed), role.
- Sequelize ORM handles migrations, queries, and constraints.
- Unique Constraint: prevents duplicate emails.

🎨 Frontend Integration
- React Components handle forms for registration/login.
- Axios communicates with backend REST routes (/api/auth) and GraphQL (/graphql).
- Thunder Client used for testing GraphQL queries/mutations during development.
