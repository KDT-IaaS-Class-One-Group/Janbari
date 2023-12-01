// route.js

const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// MySQL
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Andpf445169!',
  database: 'janbari',
});

// MySQL 연결
connection.connect();

// 정적 파일 서빙 설정
router.use('/public', express.static(path.join(__dirname, '..', 'public')));

// 라우트 설정
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'views', 'index.html')); // 수정
})

// json 
router.get('/json', (req, res) => {

  res.sendFile(path.join(__dirname, '..', 'models', 'info.json'));
  // json 파일 경로
  // join 메서드를 통해 문자열로 바꾸는 작업 진행하였음😀
  const jsonFilePath = path.join(__dirname, '..', 'models', 'info.json');

  // 파일 읽어오기
  fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('파일 로딩 실패', err);
      return;
    }

    // JSON 데이터를 파싱
    const jsonData = JSON.parse(data);
    console.log(jsonData);
  })
})

router.get('/api/data', (req, res) => {
  // MySQL에서 데이터 가져오기
  connection.query('SELECT * FROM team_members', (error, resilts, fields) => {
    if (error) throw error;

    // JSON 형태로 응답
    res.json(results);
  })
})

module.exports = router;