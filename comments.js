// Create web server
// 1. Create a web server
// 2. Listen for requests
// 3. Parse request url
// 4. Check if request url is valid
// 5. Send response

// 1. Create web server
const express = require('express');
const app = express();
const port = 3000;

// 2. Listen for requests
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// 3. Parse request url
// 4. Check if request url is valid
// 5. Send response
app.get('/comments', (req, res) => {
  // Check if request url is valid
  // If valid, send response with the comments
  // If not valid, send response with error message
  // res.send('Hello World!');
  const comments = [
    {
      id: 1,git add comments.js