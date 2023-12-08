const ho = document.getElementById('ho');
const yu = document.getElementById('yu');
const so = document.getElementById('so');
const lee = document.getElementById('lee');
const container = document.getElementById('container');
const home = document.getElementById('home');
const initialHTML = container.innerHTML;
let jsonData; // JSON 데이터를 저장할 변수

//프로필을 담고 있는 컨테이너
var containerBox1 = container.children[0]
var containerBox2 = container.children[1]
console.log(containerBox1)

// 프로필 생성 함수
function createProfile(element, profileKey) {
  // 프로필 엘리먼트에 배경 이미지 설정
  element.style.backgroundImage =`url(${jsonData[profileKey].img})`;

  // 스타일 설정
  element.style.backgroundSize = 'cover';
  element.style.borderRadius = '20%';
  element.style.cursor = 'pointer';

  // 클릭 이벤트 추가
  element.addEventListener('click', () => handleProfileClick(profileKey));
}

fetch('/json')
  .then((response) => response.json())
  .then((data) => {
    jsonData = data; // JSON 데이터 저장

    // 가져올 키 배열로 정의
    const profiles = ['잔잔바리/호녕', '잔잔바리/승민', '잔잔바리/사무엘', '잔잔바리/은정']

    // forEach 반복문을 사용하여 각 프로필에 대해 createProfile  함수 실행
    profiles.forEach((profileKey, index) => {
      createProfile([ho, yu, so, lee][index], profileKey)
    })
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
      <div class="position-rel top-5vh left-80vw">
        <button class="fontSize-2rem bgc-black border-none cursor-pointer" onclick="handleBack()">❌</button>
      </div>
      <div class="display-flex flex-column width-42-5vw height-65vh">
        <div class="display-flex justify-center align-center width-42-5vw height-10vh">
          <h2 class="fontSize-3rem margin-top-1vh">${profileData.name}</h2>
        </div>  
        <div class="display-flex justify-center align-center width-42-5vw height-55vh">  
          <img class="width-20vw height-20vw border-orange" src="${profileData.img}" alt="Profile Image">
        </div>
      </div>
      <div class="display-flex flex-column justify-center width-42-5vw height-65vh lineHeight">
        <p class="pSize"><b>GitHub: </b> <a href="${profileData.personal_site}" target="_blank">${profileData.personal_site}</a></p>
        <p class="pSize"><b>E-mail: </b>${profileData.contact}</p>
        <p class="pSize"><b>Projects: </b> <a href="${profileData.current_project}" target="_blank">${profileData.current_project}</a></p>
        <p class="pSize"><b>One-liner: </b>${profileData.bio}</p>
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

// header home, profile 변수
const homeButton = document.getElementById('homeButton')
const profileButton = document.getElementById('profileButton')

// 클릭하여 스크롤로 이동하는 함수
// * 리팩토링 필요
function scrollToTHome() {
  home.scrollIntoView({ behavior: 'smooth'});
}
function scrollToTProfile() {
  container.scrollIntoView({ behavior: 'smooth'});
}

homeButton.addEventListener('click', scrollToTHome)
profileButton.addEventListener('click', scrollToTProfile)


//! 버튼 기능
// DOM 제어를 위한 전역 변수 선언 모음
var darkModeToggleButton = document.getElementById('darkModeToggleButton');
var headerElement = document.getElementById('header');
var homeElement = document.getElementById('home');
var introduceDiv = document.getElementById('introduce');
var toggleImage = document.getElementsByTagName('toggleImage');

/**
 * @function
 * @description 클릭에 따라 다크 모드와 라이트 모드를 토글하는 함수
 */
darkModeToggleButton.addEventListener('click', () => {
  // 현재 상태가 라이트 모드이면
  if (isLight()) {
    // 다크 모드로 변경
    goDarker();
  } else {
    // 라이트 모드로 변경
    goLighter();
  }
});

// 초기 상태를 라이트 모드로 설정
goLighter();

/**
 * @function
 * @description 라이트 모드로 설정하는 함수
 * - #header와 #home을 제어한다.
 */
function goLighter() {
  // darkModeToggleButton의 클래스를 조작
  darkModeToggleButton.classList.remove('dark-mode');
  darkModeToggleButton.classList.add('light-mode');

  // 버튼 제어
  // 배경색
  // darkModeToggleButton.style.backgroundColor = ''
  // innerHTML
  darkModeToggleButton.innerHTML = '🌚'

  // #header 제어
  headerElement.style.backgroundColor = '#fff';
  
  // #home 제어
  homeElement.style.backgroundColor = '#FFA500'
  introduceDiv.style.color = '#fff';

  // #container 제어
  container.style.backgroundColor='#fff';
  containerBox1.style.backgroundColor='#fff';
  containerBox2.style.backgroundColor='#fff';
  containerBox1.style.color='#000';
  containerBox2.style.color='#000';
  }

/**
 * @function
 * @description 다크 모드로 설정하는 함수
 * - #header와 #home을 제어한다.
 */
function goDarker() {
  // darkModeToggleButton의 클래스를 조작
  darkModeToggleButton.classList.remove('light-mode');
  darkModeToggleButton.classList.add('dark-mode');
  
  // 버튼 제어
  // 배경색
  // darkModeToggleButton.backgroundColor = '#FFA500'
  // innerHTML
  darkModeToggleButton.innerHTML = '🌝'

  // #header 제어
  headerElement.style.backgroundColor = '#000';
  
  // #home 제어
  homeElement.style.backgroundColor = '#222222'
  introduceDiv.style.color = '#000';

  // #container 제어
  container.style.backgroundColor='#000';
  containerBox1.style.backgroundColor='#000';
  containerBox2.style.backgroundColor='#000';
  containerBox1.style.color='#fff';
  containerBox2.style.color='#fff';
}

/**
 * @function
 * @description 현재 상태가 라이트 모드인지 확인하는 함수
 * @returns {boolean} 라이트 모드일 경우 true, 아니면 false
 */
function isLight() {
  return darkModeToggleButton.classList.contains('light-mode');
}