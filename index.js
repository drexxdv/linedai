const express = require('express');
const app = express();

app.get('/', async (req, res) => {
  res.send('amogus test')
});

app.listen('80', async () => {
  console.log('web inisiada marikon')
});
