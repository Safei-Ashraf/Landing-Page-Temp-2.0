//Select Landing Page:
let landingPage = document.querySelector("#landing-page");

///randomize bg img:
function randomizeBackground() {
  let randomizer = Math.floor(Math.random() * 5);
  //console.log(`Randomizer value is ${randomizer}`);
  landingPage.style.backgroundImage = `url("/imgs/hero/${randomizer}.png")`;
}
//call random image function every 7s:
setInterval(() => randomizeBackground(), 7000);

//Slide Navbar on Scroll:
let navBar = document.querySelector("header.header-area");

/* W3C BaseCode*/
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    navBar.style.top = "0";
  } else {
    navBar.style.top = "-100px";
  }
}
