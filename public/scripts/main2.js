const ho = document.getElementById('ho');
const yu = document.getElementById('yu');
const so = document.getElementById('so');
const lee = document.getElementById('lee');
const container = document.getElementById('container');
const home = document.getElementById('home');
const initialHTML = container.innerHTML;
let jsonData; // JSON 데이터를 저장할 변수

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