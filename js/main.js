document.addEventListener("DOMContentLoaded", function () {
  ////////////Switch MODE REMAKE///////
  const chk = document.getElementById("chk");
  const lightSound = document.querySelector("#light-mode");
  const darkSound = document.querySelector("#dark-mode");
  chk.addEventListener("change", () => {
    document.body.classList.toggle("light-mode");
    coolSounds();
  });
  //Sound Effects based on Mode:
  function coolSounds() {
    if (chk.checked == true) {
      console.log("chkd is checked!");
      darkSound.pause();
      darkSound.currentTime = 0;
      lightSound.play();
    } else {
      console.log("chk is not checked");
      lightSound.pause();
      lightSound.currentTime = 0;
      darkSound.play();
    }
  }
});
