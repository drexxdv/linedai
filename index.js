const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');

// Asumiendo que tu archivo app.js se encuentra en la raíz del proyecto
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.get('/', async (req, res) => {
  res.render('chat')
});

app.listen('80', async () => {
  console.log('web inisiada marikon')
});
