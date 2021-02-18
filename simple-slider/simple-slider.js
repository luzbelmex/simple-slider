// Select box of slider
const windowSlider = document.getElementById("slider");
let indexSlider = 1;

// Create buttons
const buttonPrev = document.createElement("img");
buttonPrev.className = "prev";
buttonPrev.src = "simple-slider/images/left.svg";

const buttonNext = document.createElement("img");
buttonNext.className = "next";
buttonNext.src = "simple-slider/images/right.svg";

// Add buttons at slider
windowSlider.appendChild(buttonPrev);
windowSlider.appendChild(buttonNext);

// Listeners
const next = document.getElementsByClassName("next");
const prev = document.getElementsByClassName("prev");

buttonNext.addEventListener("click", nextImage);
buttonPrev.addEventListener("click", prevImage);

// Functions

function nextImage() {
  viewSlider((indexSlider += 1));
}
function prevImage() {
  viewSlider((indexSlider += 1));
}

viewSlider(indexSlider);

function viewSlider(n) {
  let i;
  const sliders = document.getElementsByClassName("image-slider");

  for (i = 0; i < sliders.length; i++) {
    sliders[i].style.display = "none";
  }
  if (n > sliders.length) {
    indexSlider = 1;
  }
  if (n < 1) {
    indexSlider = sliders.length;
  }
  sliders[indexSlider - 1].style.display = "block";
}
