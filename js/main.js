//Settings box Section:
//SAVING Selected Color to Local Storage:
//1-CHECK if there is color option in local storage:
let colorsTheme = localStorage.getItem("color_option");

if (colorsTheme) {
  document.body.style.backgroundColor = localStorage.getItem("color_option");
}

//Toggle Color Box:
//1-Click on Icon
//2-Icon gets class "open" added
//3-click again
//4-Icon gets class "open" removed;
let toggleBtn = document.querySelector("#toggle-btn");
let settingsBox = document.querySelector("#settings-box");
let toggleIcon = document.querySelector('#side-toggle');

//Click event handler:
toggleBtn.addEventListener("click", () => {
  settingsBox.classList.toggle("open");
  toggleIcon.classList.toggle('fa-chevron-circle-right');
  //Switch Icon direction on Click:
  toggleIcon.classList.toggle('fa-chevron-circle-left');

});

////////////Switch MODE REMAKE///////
const chk = document.getElementById('chk');
const lightSound = document.querySelector('#light-mode');
const darkSound = document.querySelector('#dark-mode');
chk.addEventListener('change', () => {
  document.body.classList.toggle('light-mode');
  coolSounds();
});
//Sound Effects based on Mode:

// function coolSounds (){
//   chk.checked? lightSound.play(), da: darkSound.play();
// }
function coolSounds (){
if(chk.checked == true)
{
  console.log('chkd is checked!')
  darkSound.pause();
  darkSound.currentTime = 0;
  lightSound.play();

}
else
{
  console.log('chk is not checked');
  lightSound.pause();
  lightSound.currentTime = 0;
  darkSound.play();
}
}

particlesJS.load("particles-js", "assets/particles.json", function () {
  console.log("callback - particles.js config loaded");
});





