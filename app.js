// app.js

const express = require('express');
const bodyParser =require('body-parser');
const path = require('path');
const route = require('./routes/route');

const app = express();
const port = 9997;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 정적 파일들을 제공하기 위한 미들웨어 설정
app.use(express.static(path.join(__dirname, 'public')));

// 라우트 설정
app.use('/', route);
app.use('/json', route);

// 뷰 엔진 설정 (EJS를 사용하는 예시)
app.set('views', path.join(__dirname, 'public', 'views'));
app.set('view engine', 'ejs');


// 서버 시작
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중 입니다.`)
})
