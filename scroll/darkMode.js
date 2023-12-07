// scroll.js

/**
 * 페이지가 로드되면 이벤트를 실행하는 함수
 * @function
 * @description 3초 후에 header의 높이를 10vh로 변경한다.
 */
document.addEventListener('DOMContentLoaded', function () {
  var header = document.getElementById('header');
  // 3초 뒤 실행하는 메서드
  setTimeout(() => {
    header.style.height = "10vh";
    // header의 height를 10vh로 변경
  }, 3000);

  // 초기 상태의 header 높이는 100vh로 설정
  header.style.height = "100vh"
  
  // 버튼 선택을 위한 변수 선언
  var btnYu = document.querySelector('.btn-Yu');
  var btnSo = document.querySelector('.btn-So');
  var btnLee = document.querySelector('.btn-Lee');
  var btnByeon = document.querySelector('.btn-Byeon');
  
  // 각각의 버튼 클릭 이벤트
  btnYu.addEventListener('click', function () {
    scrollToElement('.Yu');
  });
  
  btnSo.addEventListener('click', function () {
    scrollToElement('.So');
  });
  
  btnLee.addEventListener('click', function () {
    scrollToElement('.Lee');
  });

  btnByeon.addEventListener('click', function () {
    scrollToElement('.Byeon');
  });
  
  // 특정 요소로 스크롤 이동하는 함수
  function scrollToElement(selector) {
    var element = document.querySelector(selector);
    if (element) {
      // 해당 요소로 스크롤 이동
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
  
  // 다크 모드 토글 버튼 선택
  var darkModeToggle = document.getElementById('btn-darkMode');

  // 다크 모드 상태를 저장할 변수
  var isDarkMode = false;

  // 다크 모드 토글 버튼 클릭 이벤트
  darkModeToggle.addEventListener('click', function () {
    // 다크 모드 상태 변경
    isDarkMode = !isDarkMode;
    // 다크 모드 토글 함수 호출
    toggleDarkMode();
    
  });

// 다크 모드 토글 함수
function toggleDarkMode() {
  // body 요소에 dark-mode 클래스를 토글
  document.body.classList.toggle('dark-mode', isDarkMode);

  // 기존 스타일의 색상 값을 변수로 저장
  var bgColor = isDarkMode ? '#333' : '#fff';

  // header의 배경 색상 변경
  header.style.backgroundColor = bgColor;

  // header의 텍스트 색상 대비색으로 변경
  header.style.color = isDarkMode ? '#fff' : '#000';

  // container의 배경 색상 변경
  var container = document.getElementById('container');
  container.style.backgroundColor = isDarkMode ? '#222' : '#fff';

  // index의 배경 색상 변경
  var index = document.querySelector('.index');
  index.style.backgroundColor = isDarkMode ? '#333' : '#eee';

  // class로 지정한 각 요소의 배경 색상 변경
  var classElements = document.querySelectorAll('.Yu, .So, .Lee, .Byeon');
  classElements.forEach(function (element) {
    element.style.backgroundColor = isDarkMode ? '#555' : '#ddd';
  });

  // 이미지 URL 정의
  var dayImageURL = `https://cdn.icon-icons.com/icons2/935/PNG/512/sun-day-weather-symbol_icon-icons.com_73146.png`
  var nightImageURL = `https://cdn.icon-icons.com/icons2/2751/PNG/512/dark_mode_half_moon_icon_176153.png`
  darkModeToggle.innerHTML = isDarkMode? dayImageURL : nightImageURL;
}

});
