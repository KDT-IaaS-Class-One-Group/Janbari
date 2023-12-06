// app.js

const express = require('express');
const path = require('path');
const route = require('./routes/route');

const app = express();
const port = 9997;

// 정적 파일들을 제공하기 위한 미들웨어 설정
app.use(express.static(path.join(__dirname, 'public')));

// 라우트 설정
app.use('/', route);

// 서버 시작
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중 입니다.`)
})
