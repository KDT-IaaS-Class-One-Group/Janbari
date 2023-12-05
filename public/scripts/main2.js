const ho = document.getElementById('ho');
const yu = document.getElementById('yu');
const so = document.getElementById('so');
const lee = document.getElementById('lee');
const container = document.getElementById('container');
const initialHTML = container.innerHTML;
let jsonData; // JSON 데이터를 저장할 변수

function createProfile(element, profileKey) {
  element.style.backgroundImage =`url(${jsonData[profileKey].img})`;
  element.style.backgroundSize = 'cover';
  element.style.borderRadius = '20%';
  element.style.cursor = 'pointer';
  element.addEventListener('click', () => handleProfileClick(profileKey));
}

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