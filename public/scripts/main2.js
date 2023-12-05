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

// JSON 데이터 저장을 위한 변수 선언
let jsonData;

fetch('/json')
  .then((response) => response.json())
  .then((data) => {
    jsonData = data; // JSON 데이터 저장

    ho.style.backgroundImage = `url(${data['잔잔바리/호녕'].img})`;
    yu.style.backgroundImage = `url(${data['잔잔바리/승민'].img})`;
    so.style.backgroundImage = `url(${data['잔잔바리/사무엘'].img})`;
    lee.style.backgroundImage = `url(${data['잔잔바리/은정'].img})`;

    const name = [ho, yu, so, lee];

    for (let i = 0; i < name.length; i++) {
        name[i].style.backgroundSize = 'cover';
        name[i].style.borderRadius = '20%';
        name[i].style.cursor = 'pointer';
    }

    ho.addEventListener('click', () => handleProfileClick('잔잔바리/호녕'));
    yu.addEventListener('click', () => handleProfileClick('잔잔바리/승민'));
    so.addEventListener('click', () => handleProfileClick('잔잔바리/사무엘'));
    lee.addEventListener('click', () => handleProfileClick('잔잔바리/은정'));
  })
  .catch((error) => console.error('Error fetching JSON', error));

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