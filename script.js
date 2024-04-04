// RGB Colors

// Event Listener
document.getElementById("redIn").addEventListener("input", rgbPreview);
document.getElementById("greenIn").addEventListener("input", rgbPreview);
document.getElementById("blueIn").addEventListener("input", rgbPreview);

document.getElementById("width").addEventListener("input", displayPreview);
document.getElementById("height").addEventListener("input", displayPreview);
document.getElementById("display").addEventListener("input", displayPreview);
let displayE1 = document.getElementById("display");
let blackBtn = document.getElementById("blackbtn");
let whiteBtn = document.getElementById("whitebtn");
blackBtn.addEventListener("click", changeBlack);
whiteBtn.addEventListener("click", changeWhite);

function rgbPreview() {
  // values of colors
  let rValue = +document.getElementById("redIn").value;
  let gValue = +document.getElementById("greenIn").value;
  let bValue = +document.getElementById("blueIn").value;

  // Validate Colors (Constrain colors)
  if (rValue < 0) {
    rValue = 0;
    document.getElementById("redIn").value = 0;
  } else if (rValue > 255) {
    rValue = 255;
    document.getElementById("redIn").value = 255;
  }

  if (gValue < 0) {
    gValue = 0;
    document.getElementById("greenIn").value = 0;
  } else if (gValue > 255) {
    gValue = 255;
    document.getElementById("greenIn").value = 255;
  }

  if (bValue < 0) {
    bValue = 0;
    document.getElementById("blueIn").value = 0;
  } else if (bValue > 255) {
    bValue = 255;
    document.getElementById("blueIn").value = 255;
  }

  // RGb STRING
  let rgbString = `rgb(${rValue}, ${gValue}, ${bValue})`;
  console.log(rgbString);

  document.getElementById("rgbStrOut").innerHTML = rgbString;
  document.getElementById("display").style.background = rgbString;
}

function displayPreview() {
  // Input
  let height = +document.getElementById("height").value;
  let width = +document.getElementById("width").value;

  if (height < 50) {
    height = 50;
    document.getElementById("height").value = 0;
  } else if (height > 400) {
    height = 400;
    document.getElementById("height").value = 400;
  }

  if (width < 50) {
    width = 50;
    document.getElementById("width").value = 0;
  } else if (width > 400) {
    width = 400;
    document.getElementById("width").value = 400;
  }

  document.getElementById("display").style.width = `${width}px`;
  document.getElementById("display").style.height = `${height}px`;

  console.log(height);
  console.log(width);
}

function changeBlack() {
  displayE1.style.background = "black";
}

function changeWhite() {
  displayE1.style.background = "white";
}
