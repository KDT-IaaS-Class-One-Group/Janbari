const ho = document.getElementById('ho');
const yu = document.getElementById('yu');
const so = document.getElementById('so');
const lee = document.getElementById('lee');
const container = document.getElementById('container');
const initialHTML = container.innerHTML;
let jsonData; // JSON 데이터를 저장할 변수

// json으로 가져올 이미지 값을 함수로 미리 지정
function setProfileStyle(element, imgUrl) {
  element.style.backgroundImage = `url(${imgUrl})`;
  element.style.backgroundSize = 'cover';
  element.style.borderRadius = '20%';
  element.style.cursor = 'pointer';
}