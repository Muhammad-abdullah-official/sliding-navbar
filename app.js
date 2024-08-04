const closebutton = document.querySelector('.btn');
const closebtn = document.querySelector('.closebtn');
const showbtn = document.querySelector('.showbtn');
const openbtn = document.querySelector('.openbtn');

// Event Listener - click close button to close closebtn

closebutton.addEventListener('click', (e) => {
  if (!closebtn.classList.contains('show')) {
    closebtn.classList.add('show');
    closebutton.innerHTML = 'Open';
  } else {
    closebtn.classList.remove('show');
    closebutton.innerHTML = 'Close';
  }
});

//weather api
//fetch('https://api.openweathermap.org/data/2.5/weather?q=karachi&units=metric&appid=')
//fetch('https://api.openweathermap.org/data/2.5/weather?q=karachi&units=metric&appid=ecf07bafe5f67fa8a66abd728beb563b');
