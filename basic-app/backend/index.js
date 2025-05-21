const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Node.js API root!' });
});

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from Node.js API!' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
