const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;  // process.env.PORT is Heroku variable for the port. Else default to 3000

// Server serves the public folder
app.use(express.static(publicPath));

// Function that runs when GET to our server
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// Server listen on port
app.listen(port, () => {
  console.log('Server is up!');
});
