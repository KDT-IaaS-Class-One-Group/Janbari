// test/testServer.js

const express = require('express');
const app = express();
const path = require('path');
const profileData = require('./testInfo.json');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // views 디렉토리 경로 설정


app.get('/', (req, res) => {
  res.render('test', { profileData: profileData });
});


app.listen(3000, () => {
  const PORT = `http://localhost:3000/`
  console.log(`서버 ON: ${PORT}`);
});
