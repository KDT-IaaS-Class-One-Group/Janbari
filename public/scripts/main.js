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

  // 스크롤 이벤트를 위한 영역 배치 재설정 로직
  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    // 현재 스크롤 위치
    const scrollTop = container.scrollTop;

    // container 높이와 스크롤 가능한 전체 높이
    const containerHeight = container.clientHeight;
    const containerScrollHeight = container.scrollHeight;

    // 팀 멤버 각각의 위치를 재설정
    const hoPosition = scrollTop / 4 * 1;
    const yuPosition = scrollTop / 4 * 2;
    const soPosition = scrollTop / 4 * 3;
    const leePosition = scrollTop / 4 * 4;
  
    // 각 팀 멤버의 위치 설정
    ho.style.top = `${hoPosition}vh`;
    yu.style.top = `${yuPosition}vh`;
    so.style.top = `${soPosition}vh`;
    lee.style.top = `${leePosition}vh`;
  };
  
  // 컨테이너에 스크롤 이벤트 리스너 추가
  container.addEventListener('scroll', handleScroll);

// 초기화할 때 한 번 호출하여 초기 위치 설정
handleScroll();

  