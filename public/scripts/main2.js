// public/scripts/main2.js

// npm install ejs로 설치하고 모듈 사용
const ejs = require('ejs'); 

/**
 * 팀원들 이름 엘리먼트를 변수로 선언하는 함수
 * @param {string} member - 팀원의 이름
 * @returns {HTMLElement} - 팀원의 HTML 엘리먼트
 */
function getMemberElementById(member) {
  return document.getElementById(member);
}

// DOM 접근을 위한 엘리먼트들을 변수 선언
// 팀원 이름
const ho = getMemberElementById('ho');
const yu = getMemberElementById('yu');
const so = getMemberElementById('so');
const lee = getMemberElementById('lee');
// HTML 요소
const container = document.getElementById('container');
const initialHTML = container.innerHTML;

// JSON 데이터 저장을 위해 전역 스코프에 변수 선언
let jsonData = null;

/**
 * Fetch를 사용하여 JSON 데이터를 가져오고 팀원 정보를 업데이트하는 함수
 * @param {string} url - JSON 데이터를 가져올 URL
 * @param {HTMLElement} ho - '잔잔바리/호녕'
 * @param {HTMLElement} yu - '잔잔바리/승민'
 * @param {HTMLElement} so - '잔잔바리/사무엘'
 * @param {HTMLElement} lee - '잔잔바리/은정'
 */
function fetchDataAndUpdate(url, ho, yu, so, lee) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      jsonData = data;
      // 팀원 정보 업데이트
      updateTeamMembersInfo([ho, yu, so, lee], data);
    })
    .catch((error) => {
      console.error('JSON fetch Error: ', error.message);
    });
}

/**
 * 팀원 정보를 업데이트하는 함수
 * @param {HTMLElement[]} elements - 팀원 요소 배열
 * @param {Object} data - 업데이트에 사용할 JSON 데이터
 */
function updateTeamMembersInfo(elements, data) {
  const teamMembers = ['잔잔바리/호녕', '잔잔바리/승민', '잔잔바리/사무엘', '잔잔바리/은정'];

  // 배열에 접근해 forEach() 메서드로 반복문 적용
  teamMembers.forEach((member, index) => {
    const element = elements[index];
    element.style.backgroundImage = `url(${data[member].img})`;
    element.style.backgroundSize = 'cover';
    element.style.borderRadius = '20%';
    element.style.cursor = 'pointer';
    element.addEventListener('click', () => {
      handleProfileClick(member);
    });
  });
}

// HTML에서 팀원들의 이미지를 표시할 요소들 가져오기
const hoElement = document.getElementById('ho');
const yuElement = document.getElementById('yu');
const soElement = document.getElementById('so');
const leeElement = document.getElementById('lee');
// JSON 데이터를 가져올 URL
const jsonUrl = '/json';

// fetchDataAndUpdate() 함수를 호출해 JSON 데이터를 가져오고 팀원 정보를 업데이트
fetchDataAndUpdate(jsonUrl, hoElement, yuElement, soElement, leeElement);

function handleProfileClick(profileId) {
  // 기존 내용 지우기
  container.innerHTML = '';

  if (jsonData) {
    const profileData = jsonData[profileId];

    // EJS 템플릿을 사용하여 HTML 코드 동적으로 생성
    ejs.renderFile(path.join(__dirname, 'public', 'views', 'profile.ejs'), { profileData }, (err, html) => {
      if (err) {
        console.error('EJS rendering error: ', err);
      } else {
        // 새로운 div에 HTML 코드를 추가
        const newDiv = document.createElement('div');
        newDiv.classList.add('new-profile');
        newDiv.innerHTML = html;
        container.appendChild(newDiv);
      }
    });
  } else {
    console.error('JSON data is not available.');
  }
}

function handleBack() {
  // 초기 화면으로 돌아가는 코드 추가
  // 예: location.reload(); 또는 contentContainer.innerHTML = '초기화면의 HTML 코드';
  location.reload(); // 페이지 새로고침을 통해 초기 상태로 돌아가는 예시
}