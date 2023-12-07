// scroll.js

document.addEventListener('DOMContentLoaded', function () {
  // 페이지 로드 후 3초 뒤에 실행되는 애니메이션
  setTimeout(() => {
    var header = document.getElementById('header');
    header.style.height = "10vh";
  }, 3000);
});