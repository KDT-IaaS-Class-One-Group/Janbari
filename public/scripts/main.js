// fetch('/models/info.json')
//   .then(response => response.json())
//   .then(data => {
//     document.getElementById('ho').style.backgroundImage = `url(${data['잔잔바리/호녕'].img})`;
//     document.getElementById('yu').style.backgroundImage = `url(${data['잔잔바리/승민'].img})`;
//     document.getElementById('so').style.backgroundImage = `url(${data['잔잔바리/사무엘'].img})`;
//     document.getElementById('lee').style.backgroundImage = `url(${data['잔잔바리/은정'].img})`;
//   })
//   .catch(error => console.error('Error fetching JSON', error));

fetch('/json')
      .then(response => response.json())
      .then(data => {
        // Update background images based on JSON data
        const profiles = document.getElementsByClassName('profile');
        for (let i = 0; i < profiles.length; i++) {
          const profileName = profiles[i].getAttribute('data-profile-name');
          profiles[i].style.backgroundImage = `url(${data[profileName].img})`;
        }
      })
      .catch(error => console.error('Error fetching JSON:', error));

