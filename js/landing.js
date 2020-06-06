//Select Landing Page:
let landingPage = document.querySelector("#landing-page");
console.log(landingPage);
///randomize bg img:
function randomizeBackground() {
  let randomizer = Math.floor(Math.random() * 5);
  //console.log(`Randomizer value is ${randomizer}`);
  landingPage.style.backgroundImage = `url("/imgs/hero/${randomizer}.png")`;
}
//call random image function every 7s:
setInterval(() => randomizeBackground(), 7000);
