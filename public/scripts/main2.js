//* 프로필 정보를 담은 배열,객체 html의 id와 json데이터의 키로 구성되어있다.
const profileElements = [
  { id: 'ho', jsonKey: '잔잔바리/호녕' },
  { id: 'yu', jsonKey: '잔잔바리/승민' },
  { id: 'so', jsonKey: '잔잔바리/사무엘' },
  { id: 'lee', jsonKey: '잔잔바리/은정' },
];

const container = document.getElementById('container');
const initialHTML = container.innerHTML;
let jsonData; // JSON 데이터를 저장할 변수

//* async는 json 데이터를 가져오는 비동기 함수 fatch를 사용해서 서버에서 json 데이터를 받아온다.
async function fetchData() {
  try {
    const response = await fetch('/json');
    jsonData = await response.json();
  } catch (error) {
    console.error('Error fetching JSON', error);
  }
}
//* 프로필을 가져오는 함수
function renderProfiles() {
  //* 배열을 순회하면서 스타일을 지정하고 클릭이벤트를 추가한다.
  profileElements.forEach(({ id, jsonKey }) => {
    //* 현재 순회중인 프로필요소의 html요소를 id를 사용하여 가져온다.
    const element = document.getElementById(id);
    //*프로필 스타일을 설정한다.
    setProfileStyle(element, jsonData[jsonKey].img);
    //* 클릭이벤트를 생성한다.
    profileClick(element, jsonKey);
  });
}
//* 프로필 이미지의 스타일 지정
function setProfileStyle(element, imgUrl) {
  element.style.backgroundImage = `url(${imgUrl})`;
  element.style.backgroundSize = 'cover';
  element.style.borderRadius = '20%';
  element.style.cursor = 'pointer';
}
//* 클릭이벤트 설정
function profileClick(element, profileKey) {
  //* 클릭을 하면 handleProfileClick 함수를 호출하게 된다.
  //* 컨테이너 innerHtml 빈칸
  element.addEventListener('click', () => handleProfileClick(profileKey));
}

function handleProfileClick(profileKey) {
  // 기존 내용 지우기
  container.innerHTML = '';

  if (jsonData) {
    const profileData = jsonData[profileKey];

    // 새로운 div에 데이터 추가
    const newDiv = document.createElement('div');
    newDiv.classList.add('new-profile');
    newDiv.innerHTML = createProfileHTML(profileData);

    // 새로운 div를 container에 추가
    container.appendChild(newDiv);
  } else {
    console.error('JSON data is not available.');
  }
}

function createProfileHTML(profileData) {
  return `
    <div class="position-abs left-88vw top-33vh">
      <button class="fontSiez-2rem bgc-black border-none cursor-pointer" onclick="handleBack()">❌</button>
    </div>
    <div class="display-flex flex-column width-42-5vw height-65vh">
      <div class="display-flex justify-center align-center width-42-5vw height-10vh">
        <h2 class="fontSiez-3rem margin-top-1vh">${profileData.name}</h2>
      </div>  
      <div class="display-flex justify-center align-center width-42-5vw height-55vh">  
        <img class="width-20vw height-20vw" src="${profileData.img}" alt="Profile Image">
      </div>
    </div>
    <div class="display-flex flex-column justify-center width-42-5vw height-65vh lineHeight">
      <p class="pSize"><b>GitHub: </b>${profileData.personal_site}</p>
      <p class="pSize"><b>E-mail: </b>${profileData.contact}</p>
      <p class="pSize"><b>Projects: </b> <a href="${profileData.current_project}" target="_blank">${profileData.current_project}</a></p>
    </div>  
  `;
}

function handleBack() {
  // 초기 화면으로 돌아가는 코드 추가
  // 예: location.reload(); 또는 contentContainer.innerHTML = '초기화면의 HTML 코드';
  location.reload(); // 페이지 새로고침을 통해 초기 상태로 돌아가는 예시
}

// fetchData 함수 호출 및 데이터 렌더링
fetchData().then(renderProfiles);
