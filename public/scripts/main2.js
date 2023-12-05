// public/scripts/main2.js

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

    // 새로운 div에 데이터 추가
    const newDiv = document.createElement('div');
    newDiv.classList.add('new-profile');
    newDiv.innerHTML = `
      <div class="position-abs left-88vw top-33vh">
        <button class="fontSiez-2rem bgc-black border-none cursor-pointer" onclick="handleBack()">❌</button>
      </div>
      <div class="display-flex flex-column width-42-5vw height-65vh">
        <div class="display-flex justify-center align-center width-42-5vw height-10vh">
          <h2 class="fontSiez-3rem margin-top-1vh">${profileData.name}</h2>
        </div>  
        <div class="display-flex justify-center align-center width-42-5vw height-55vh">  
          <img class="width-20vw height-20vw border-orange" src="${profileData.img}" alt="Profile Image">
        </div>
      </div>
      <div class="display-flex flex-column justify-center width-42-5vw height-65vh lineHeight">
        <p class="pSize"><b>GitHub: </b>${profileData.personal_site}</p>
        <p class="pSize"><b>E-mail: </b>${profileData.contact}</p>
        <p class="pSize"><b>Projects: </b> <a href="${profileData.current_project}" target="_blank">${profileData.current_project}</a></p>
      </div>  
    `;

    // 새로운 div를 container에 추가
    container.appendChild(newDiv);
  } else {
    console.error('JSON data is not available.');
  }
}

function handleBack() {
  // 초기 화면으로 돌아가는 코드 추가
  // 예: location.reload(); 또는 contentContainer.innerHTML = '초기화면의 HTML 코드';
  location.reload(); // 페이지 새로고침을 통해 초기 상태로 돌아가는 예시
}