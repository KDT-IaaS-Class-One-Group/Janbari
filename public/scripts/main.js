const ho = document.getElementById('ho');
const yu = document.getElementById('yu');
const so = document.getElementById('so');
const lee = document.getElementById('lee');
const container = document.getElementById('container');

fetch('/json')
  .then((response) => response.json())
  .then((data) => {
    ho.style.backgroundImage = `url(${data['잔잔바리/호녕'].img})`;
    yu.style.backgroundImage = `url(${data['잔잔바리/승민'].img})`;
    so.style.backgroundImage = `url(${data['잔잔바리/사무엘'].img})`;
    lee.style.backgroundImage = `url(${data['잔잔바리/은정'].img})`;
    ho.style.backgroundSize = 'cover';
    yu.style.backgroundSize = 'cover';
    so.style.backgroundSize = 'cover';
    lee.style.backgroundSize = 'cover';

    ho.addEventListener('click', () => handleProfileClick('잔잔바리/호녕'));
    yu.addEventListener('click', () => handleProfileClick('잔잔바리/승민'));
    so.addEventListener('click', () => handleProfileClick('잔잔바리/사무엘'));
    lee.addEventListener('click', () => handleProfileClick('잔잔바리/은정'));

    function handleProfileClick(profileId) {
      // 기존 내용 지우기
      container.innerHTML = '';
    
      // JSON 파일에서 데이터 가져오기
      fetch('/json')
        .then(response => response.json())
        .then(data => {
          const profileData = data[profileId];
    
          // 새로운 div에 데이터 추가
          const newDiv = document.createElement('div');
          newDiv.classList.add('new-profile');
          newDiv.innerHTML = `
            <h2>${profileData.name}</h2>
            <p>${profileData.personal_site}</p>
            <p>Contact: ${profileData.contact}</p>
            <p>Current Project: <a href="${profileData.current_project}" target="_blank">${profileData.current_project}</a></p>
            <img class= width-10vw height-10vw src="${profileData.img}" alt="Profile Image">
            <button class = fontSiez-2rem onclick="handleBack()">🔙</button>
          `;
    
          // 새로운 div를 body에 추가
          container.appendChild(newDiv);
        })
        .catch(error => console.error('Error fetching JSON', error));
    }
  })
  .catch((error) => console.error('Error fetching JSON', error));

  function handleBack() {
  // 초기 화면으로 돌아가는 코드 추가
  // 예: location.reload(); 또는 contentContainer.innerHTML = '초기화면의 HTML 코드';
  location.reload(); // 페이지 새로고침을 통해 초기 상태로 돌아가는 예시
}
// fetch('/json')
//       .then(response => response.json())
//       .then(data => {
//         // Update background images based on JSON data
//         const profiles = document.getElementsByClassName('profile');
//         for (let i = 0; i < profiles.length; i++) {
//           const profileName = profiles[i].getAttribute('data-profile-name');
//           profiles[i].style.backgroundImage = `url(${data[profileName].img})`;
//         }
//       })
//       .catch(error => console.error('Error fetching JSON:', error));
