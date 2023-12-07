// main2.js
const profileElements = [
  { id: 'ho', jsonKey: '잔잔바리/호녕' },
  { id: 'yu', jsonKey: '잔잔바리/승민' },
  { id: 'so', jsonKey: '잔잔바리/사무엘' },
  { id: 'lee', jsonKey: '잔잔바리/은정' },
];

const container = document.getElementById('container');
let jsonData;

async function fetchData() {
  try {
    const response = await fetch('/json');
    jsonData = await response.json();
  } catch (error) {
    console.error('Error fetching JSON', error);
  }
}

function renderProfiles() {
  profileElements.forEach(({ id, jsonKey }) => {
    const element = document.getElementById(id);
    setProfileStyle(element, jsonData[jsonKey].img);
  });
}

function setProfileStyle(element, imgUrl) {
  element.style.backgroundImage = `url(${imgUrl})`;
  element.style.backgroundSize = 'cover';
  element.style.borderRadius = '20%';
  element.style.cursor = 'pointer';
}

function addHomeButtonClickEvent() {
  const homeButton = document.getElementById('homeButton');
  homeButton.addEventListener('click', scrollToTHome);
}

function addProfileButtonClickEvent() {
  const profileButton = document.getElementById('profileButton');
  profileButton.addEventListener('click', scrollToTProfile);
}

function scrollToTHome() {
  document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
}

function scrollToTProfile() {
  container.scrollIntoView({ behavior: 'smooth' });
}

let currentProfileIndex = 0;
let profilesRendered = false;
window.addEventListener('scroll', handleScroll);

async function handleScroll() {
  const bottomOfScreen = window.innerHeight + window.scrollY;

  if (!profilesRendered) {
    const nextProfileElement = document.getElementById(profileElements[currentProfileIndex].id);
    const profileBottom = nextProfileElement.offsetTop + nextProfileElement.offsetHeight;

    if (bottomOfScreen > profileBottom) {
      await fetchData();
      renderProfiles();
      currentProfileIndex += 1;

      if (currentProfileIndex === profileElements.length) {
        profilesRendered = true;
      }
    }
  }
}

addHomeButtonClickEvent();
addProfileButtonClickEvent();
fetchData().then(renderProfiles);
