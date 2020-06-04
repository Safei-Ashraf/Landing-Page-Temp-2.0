//Settings box Section:
//1-Click on Icon
//2-Icon gets class "open" added
//3-click again
//4-Icon gets class "open" removed;
let toggleBtn = document.querySelector("#toggle-btn");
let settingsBox = document.querySelector("#settings-box");
// console.log(toggleBtn);
toggleBtn.addEventListener("click", () => {
  settingsBox.classList.toggle("open");
  console.log("clicked");
});

//Select Landing Page:
let landingPage = document.querySelector("#landing-page");

///randomize bg img:
function randomizeBackground() {
  let randomizer = Math.floor(Math.random() * 5);
  landingPage.style.backgroundImage = `url("/imgs/hero/${randomizer}.png")`;
}
//call random image function every 7s:
setInterval(() => randomizeBackground(), 7000);
