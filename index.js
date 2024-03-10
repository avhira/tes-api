const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/tes', (req, res) => {
  res.send('Hello Avhira');
});
app.post('/tes', (req, res) => {
  res.send('Hello Ruican');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
