function changePicturereaper() {
  //change the blue stuff
  document.getElementById("reaper").src = "images/avjj5nl73eu51.jpg";
  document.getElementById("reaperSound").play();
}
function changePictureram() {
  //change the blue stuff
  document.getElementById("ram-1").src = "images/Rammattra-OW2.webp";
  randomRamattraSound();
}
function reaperSounds() {
  document.getElementById("reaperSound").play();
}
function randomRamattraSound() {
  let x = Math.round(Math.random() * 2);
  if (x === 0) {
    document.getElementById("NOW").play();
  } else if (x === 1) {
    document.getElementById("allyRAM").play();
  } else if (x === 2) {
    document.getElementById("enemyRAM").play();
  }
}
