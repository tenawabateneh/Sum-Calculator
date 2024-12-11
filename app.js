const express = require('express');
const app = express();
const port = 8080;

// Parse JSON bodies
app.use(express.json());

// Define the sum calculation route
app.post('/sum', (req, res) => {
  const { numbers } = req.body;
  
  if (!Array.isArray(numbers)) {
    return res.status(400).send({ error: 'The "numbers" field must be an array.' });
  }

  const sum = numbers.reduce((acc, num) => acc + num, 0);
  res.send({ sum });
});

// Start the server
app.listen(port, () => {
  console.log(`Sum calculator app listening at http://localhost:${port}`);
});
