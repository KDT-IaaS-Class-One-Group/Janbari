// app.js

const express = require('express');
const bodyParser =require('body-parser');
const path = require('path');
const route = require('./routes/route');

const app = express();
const port = 9997;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// app.use(express.static(path.join(__dirname, '..', 'public', 'views')));
app.use('/', route);
app.use('/json', route);


app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중 입니다.`)
})
