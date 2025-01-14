# Express.js Route Handler Missing Error Handling

This repository demonstrates a common error in Express.js route handlers: missing error handling for invalid input.

The `bug.js` file shows a route that attempts to retrieve a user by ID.  However, it fails to handle cases where the user ID is invalid, resulting in unexpected behavior.

The `bugSolution.js` file demonstrates how to properly handle such scenarios using appropriate status codes (404 Not Found) and error responses.