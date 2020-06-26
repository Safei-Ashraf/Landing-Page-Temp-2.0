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
  toggleIcon.classList.toggle('fa-chevron-circle-left');

});

//Switch colors in sidebar:
const colorsList = document.querySelectorAll(".colors-list li");
//Loop on the list colors:
colorsList.forEach((li) => {
  //set bg color on click:
  li.addEventListener("click", (e) => {
    document.body.style.backgroundColor = e.target.dataset.color;
    document.documentElement.style.setProperty(
      "--theme-color",
      e.target.dataset.color
    );
    //STORE Color in  Local Storage
    localStorage.setItem("color_option", e.target.dataset.color);
  });
});

//Highlight Selected color with ACTIVE Class:
for (let i = 0; i < colorsList.length; i++) {
  colorsList[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active-color");
    current[0].className = current[0].className.replace("active-color", "");
    this.className += "active-color";
  });
}

particlesJS.load("particles-js", "assets/particles.json", function () {
  console.log("callback - particles.js config loaded");
});
