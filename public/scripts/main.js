const root = document.getElementById('root');
fetch('/json')
  .then((response) => response.json())
  .then((data) => {
    const ho = document.getElementById('ho');
    const yu = document.getElementById('yu');
    const so = document.getElementById('so');
    const lee = document.getElementById('lee');

    const member = [ho, yu, so, lee];
    const name = ['호녕', '사무엘', '승민', '은정'];

    ho.style.backgroundImage = `url(${data['잔잔바리/호녕'].img})`;
    yu.style.backgroundImage = `url(${data['잔잔바리/승민'].img})`;
    so.style.backgroundImage = `url(${data['잔잔바리/사무엘'].img})`;
    lee.style.backgroundImage = `url(${data['잔잔바리/은정'].img})`;
    ho.style.backgroundSize = 'cover';
    yu.style.backgroundSize = 'cover';
    so.style.backgroundSize = 'cover';
    lee.style.backgroundSize = 'cover';
    // 클릭 이벤트를 추가하는 함수
    function addClickEvent(element) {
      element.addEventListener('click', function () {
        console.log(`${element.id} 클릭 이벤트 발생`);
        // 클릭 이벤트에 수행할 작업을 여기에 추가
        const newDiv = document.createElement('div');
        root.appendChild(newDiv);
        newDiv.style.width = '90vw';
        newDiv.style.height = '70vh';
        newDiv.style.backgroundColor = 'D9D9D9';
        newDiv.style.position = 'absolute';
        newDiv.style.top = '220px';
        newDiv.textContent = `${name[0]}.img`;
      });
    }

    // 각각의 div에 클릭 이벤트 추가
    addClickEvent(ho);
    addClickEvent(yu);
    addClickEvent(so);
    addClickEvent(lee);

    // JSON 데이터 로드 및 처리 부분은 여기에 추가
  })

  .catch((error) => console.error('Error fetching JSON', error));

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
