// main.js

const ho = document.getElementById('ho');
const yu = document.getElementById('yu');
const so = document.getElementById('so');
const lee = document.getElementById('lee');
const container = document.getElementById('container');
const root = document.getElementById('root');

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
      // 새로운 div 생성
      const newDiv = document.createElement('div');
      newDiv.classList.add('new-profile'); // 예시로 'new-profile' 클래스를 추가
    
      // JSON 파일에서 데이터 가져오기
      fetch('/json')
        .then(response => response.json())
        .then(data => {
          const profileData = data[profileId];
    
          // 새로운 div에 데이터 추가
          newDiv.innerHTML = `
            <h2>${profileData.name}</h2>
            <p>${profileData.personal_site}</p>
            <p>Contact: ${profileData.contact}</p>
            <p>Current Project: <a href="${profileData.current_project}" target="_blank">${profileData.current_project}</a></p>
            <img src="${profileData.img}" alt="Profile Image">
          `;
    
          // 새로운 div를 body에 추가
          document.body.appendChild(newDiv);
        })
        .catch(error => console.error('Error fetching JSON', error));
    }
  })
  .catch((error) => console.error('Error fetching JSON', error));

  
  // 초기 위치 설정 함수
  const setMemberPositions = () => {
    // container 높이
    const containerHeight = container.clientHeight;
    
    // 각 팀 멤버 간격 계산
    const sectionHeight = containerHeight / 5;
    
    // 팀 멤버 각각의 초기 위치 설정
    ho.style.top = `${sectionHeight * 2}vh`; // 2/5 지점
    yu.style.top = `${sectionHeight * 3}vh`; // 3/5 지점
    so.style.top = `${sectionHeight * 4}vh`; // 4/5 지점
    lee.style.top = `${sectionHeight * 5}vh`; // 5/5 지점
  };
  
  // 초기화할 때 한 번 호출하여 초기 위치 설정
  setMemberPositions();  
  
  // 스크롤 이벤트 구현 로직
  // 새로운 div를 저장할 변수
  let jsonContainer; 
  
// IntersectionObserver 설정
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // id 엘리먼트가 화면에 보일 때
    if (entry.isIntersecting) {
      // id 엘리먼트가 없으면 새로운 div 생성
      if (!jsonContainer) {
        jsonContainer = document.createElement('div');
        jsonContainer.id = 'json-container';
        jsonContainer.style.position = 'fixed';
        jsonContainer.style.width = '80%';
        jsonContainer.style.height = '80%';
        jsonContainer.style.maxWidth = '500px';
        jsonContainer.style.maxHeight = '500px';
        jsonContainer.style.background = '#fff';
        jsonContainer.style.border = '2px solid #ccc';
        jsonContainer.style.padding = '20px';
        jsonContainer.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
        jsonContainer.style.zIndex = '1000';
        jsonContainer.style.overflowY = 'auto';

        // 중앙 정렬을 위해 top, left 설정
        jsonContainer.style.top = '50%';
        jsonContainer.style.left = '50%';
        jsonContainer.style.transform = 'translate(-50%, -50%)';

        // container에 새로운 div 추가
        container.appendChild(jsonContainer);
      }
    } else {
      // id 엘리먼트가 보이지 않으면 생성한 div 삭제
      if (jsonContainer) {
        container.removeChild(jsonContainer);
        jsonContainer = null; // 변수 초기화
      }
    }
  });
}, { threshold: 0.5 }); // 옵션: 화면에 50% 이상 보일 때

// Observer를 id 엘리먼트에 연결
observer.observe(ho);
