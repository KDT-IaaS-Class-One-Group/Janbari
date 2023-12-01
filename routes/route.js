// route.js

const express = require('express');
const router = express.Router();
const path = require('path');

router.use('/public', express.static(path.join(__dirname, '..', 'public')));

// 라우트 설정
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'views', 'index.html'));
});

// MySQL에서 데이터 가져오기
router.get('/json', (req, res) => {
  const connection = req.connection;
  
  const query = 'SELECT * FROM info';

  connection.query(query, (error, results) => {
    if (error) {
      console.error('MySQL query error:', error);
      res.status(500).send('Internal Server Error');
      return;
    }

    // MySQL 결과를 JSON 형태로 응답
    res.json(results);
  });
});

module.exports = router;
