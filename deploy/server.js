const path = require('path');
const express = require('express');
const app = express(); // create express app

const port = process.env.PORT || 3000; // Line 3

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
