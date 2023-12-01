const ho = document.getElementById('ho');
const yu = document.getElementById('yu');
const so = document.getElementById('so');
const lee = document.getElementById('lee');
const container = document.getElementById('container');
const initialHTML = container.innerHTML;
let jsonData; // JSON 데이터를 저장할 변수

fetch('/api/data')
  .then((response) => response.json())
  .then((data) => {
    const name = [ho, yu, so, lee];
    jsonData = data; // JSON 데이터 저장

    //동적으로 키를 사용하여 데이터 가져오기
    Object.keys(data).forEach((profilekey, index) => {
      const profileData = data[profilekey];
      const profileElement = name[index];

      if (profileData && profileElement) {
        profileElement.style.backgroundImage = `url(${profileData.img})`;
      }
    })

    // ho.style.backgroundImage = `url(${data['잔잔바리/호녕'].img})`;
    // yu.style.backgroundImage = `url(${data['잔잔바리/승민'].img})`;
    // so.style.backgroundImage = `url(${data['잔잔바리/사무엘'].img})`;
    // lee.style.backgroundImage = `url(${data['잔잔바리/은정'].img})`;


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