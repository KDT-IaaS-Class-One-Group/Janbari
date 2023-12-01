// app.js

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const route = require('./routes/route');
const mysql = require('mysql');

const app = express();
const port = 9997;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MySQL 연결 설정
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'my_team',
});

// MySQL 연결
connection.connect((err) => {
  if (err) {
    console.error('MySQL connection error: ', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// 라우트에 MySQL 연결 객체 전달
app.use('/', (req, res, next) => {
  req.connection = connection;
  next();
});

app.use('/', route);
app.use('/json', route);

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중 입니다.`);
});
