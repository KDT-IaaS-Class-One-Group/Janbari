// route.js

const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// 정적 파일 서빙 설정
router.use('/public', express.static(path.join(__dirname, '..', 'public')));

// 라우트 설정
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'views', 'index.html'));
})

module.exports = router;