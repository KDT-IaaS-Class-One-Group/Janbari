const express = require('express');
const bodyParser =require('body-parser');
const path = require('path');

const app = express();
const port = 9997;

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중 입니다.`)
})
