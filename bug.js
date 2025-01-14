const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  const user = users.find(user => user.id === userId);
  if (user) {
    res.json(user);
  } else {
    // Should return 404 Not Found
    res.json({}); // Incorrect response
  }
});