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
});
