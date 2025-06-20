// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port or default to 3000

app.get('/', (req, res) => {
  res.send('Hello, CI/CD! (Attempt 2 - Simpler  Asante kelvin)');

});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});