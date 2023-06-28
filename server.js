const express = require('express');
const app = express();

// Enable CORS middleware
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001'); // Update with the appropriate origin
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Example route
app.get('/student', (req, res) => {
  // Handle the student request here and send the response
  const studentName = 'Jacob Nejam'; // Replace with your logic to fetch the student name
  res.send(studentName);
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
