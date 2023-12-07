// scroll.js

/**
 * 페이지가 로드되면 이벤트를 실행하는 함수
 * @function
 * @description 3초 후에 header의 높이를 10vh로 변경한다.
 */
document.addEventListener('DOMContentLoaded', function () {
  // 3초 뒤 실행하는 메서드
  setTimeout(() => {
    var header = document.getElementById('header');
    // header의 height를 10vh로 변경
    header.style.height = "10vh";
  }, 3000);
});