// route.js

const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// 정적 파일 서빙 설정
router.use('/public', express.static(path.join(__dirname, '..', 'public')));
// 이미지 파일 별도 라우팅 처리
router.use('/images', express.static(path.join(__dirname, '..', 'images')));
router.use('/images/icons', express.static(path.join(__dirname, '..', 'images', 'icons')));

// 라우트 설정
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'views', 'index.html'));
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
  })
})

module.exports = router;