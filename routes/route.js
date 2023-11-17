const express = require('express');
const router = express.Router();
const path = require('path');

// 정적 파일 서빙 설정
router.use(express.static(path.join(__dirname, '..', 'public')));

// 뷰 엔진 설정
// router.set('views', path.join(__dirname, 'views'));
// router.set('view engine', 'html');

// 라우트 설정
router.get('/', (req, res) => {
  res.render('index'); // 'views' vhfejdml 'index.html' 파일을 렌더링
})

module.exports = router;