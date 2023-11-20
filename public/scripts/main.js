const root = document.getElementById('root');
const profile = document.querySelectorAll('.profile');
console.log(profile);

// todo json 파일로 이미지 생성하기
// * 1. eventListener 생성하기
// * 2. json 파일 데이터 가져오기
// * 3. 가져온 데이터 값 (백그라운드 이미지) 원하는 클래스에 지정하기
// todo 이미지 클릭 시 div 생성

document.addEventListener('DOMContentLoaded', () => {
  fetch('/json') 
    .then((response) => response.json())
    .then((data) => 
    console.log(data))
    .catch((error) => 
    console.error('JSON 데이터 불러오기 실패', error))
})

