const express = require('express');
const path = require('path');
const app = express();

app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "frame-ancestors *");
  res.setHeader('X-Frame-Options', 'ALLOWALL');
  next();
});

app.use(express.static('public'));

app.all('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});