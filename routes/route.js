// route.js

const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const mysql = require('mysql2'); // 미들웨어 설정 쿼리문 전축 느낌으로 본다

// 정적 파일 서빙 설정
router.use('/public', express.static(path.join(__dirname, '..', 'public')));

// 라우트 설정
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'views', 'index.html')); // 수정
});

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
  });
});

// mysql
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'wnsla4790',
  database: 'info',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

router.get('/api/info', (req, res) => {
  const query = 'SELECT * FROM info';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error querying database:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });
});

// 서버에서 특정 프로필 정보를 반환하는 API 추가
router.get('/api/developers/:profileId', (req, res) => {
  const profileId = req.params.id;
  const query = 'SELECT * FROM info WHERE username = ?';

  connection.query(query, [profileId], (err, results) => {
    if (err) {
      console.error('Error querying database:', err);
      res.status(500).send('Internal Server Error');
    } else {
      if (results.length > 0) {
        // 프로필 정보가 존재하면 해당 정보 응답
        res.json(results[0]);
      } else {
        // 해당 프로필이 존재하지 않으면 404 에러 응답
        res.status(404).send('Profile not found');
      }
    }
  });
});

module.exports = router;
