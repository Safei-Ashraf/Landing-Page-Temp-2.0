//Settings box Section:
//1-Click on Icon
//2-Icon gets class "open" added
//3-click again
//4-Icon gets class "open" removed;
let toggleBtn = document.querySelector("#toggle-btn");
let settingsBox = document.querySelector("#settings-box");
//Click event handler:
toggleBtn.addEventListener("click", () => {
  settingsBox.classList.toggle("open");
  console.log("clicked");
});

//Switch colors in sidebar:
const colorsList = document.querySelectorAll(".colors-list li");
//Loop on the list colors:
colorsList.forEach((li) => {
  //set bg color on click:
  li.addEventListener("click", (e) => {
    document.body.style.backgroundColor = e.target.dataset.color;
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
