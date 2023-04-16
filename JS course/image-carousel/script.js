const images = document.querySelectorAll("img");
let currentImage = images[0];
let currentIndex = 0;
const next = document.querySelector(".right-arrow");
const previous = document.querySelector(".left-arrow");

let fiveSec;

next.addEventListener("click", displayNext);
previous.addEventListener("click", displayPrevious);

function displayNext() {
  clearTimeout(fiveSec);
  if (currentIndex < (images.length -1)) {
    currentIndex++;
    const nextImage = images[currentIndex];
    circles[currentIndex - 1].textContent = "⚪";

    nextImage.className = "active";
    currentImage.className = "";

    currentImage.setAttribute("hidden", true);
    nextImage.removeAttribute("hidden");

    currentImage = nextImage;

    circles[currentIndex].textContent = "⚫";
  }
  fiveSecSlider();
}

function displayPrevious() {
  clearTimeout(fiveSec);
  if (currentImage.previousElementSibling) {
    currentIndex--;
    const previousImage = images[currentIndex];
    circles[currentIndex + 1].textContent = "⚪";

    previousImage.className = "active";
    currentImage.className = "";

    currentImage.setAttribute("hidden", true);
    previousImage.removeAttribute("hidden");

    currentImage = previousImage;

    circles[currentIndex].textContent = "⚫";
  }
  fiveSecSlider();
}

const circleContainer = document.querySelector(".circles"); // ●

function addCircles() {
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("data-value", i);

    const newCircle = document.createElement("div");
    newCircle.setAttribute("data-value", i);
    newCircle.className = "circle";
    newCircle.textContent = "⚪";
    circleContainer.appendChild(newCircle);

    newCircle.addEventListener("click", changeImage);
  }
}

addCircles();
const circles = document.querySelectorAll(".circle");
circles[currentIndex].textContent = "⚫";

function changeImage() {
  clearTimeout(fiveSec);
  const index = parseFloat(this.getAttribute("data-value"));

  currentImage.setAttribute("hidden", true);
  currentImage.className = "";

  currentImage = images[index];
  currentImage.className = "active";

  images[index].removeAttribute("hidden");
  circles[currentIndex].textContent = "⚪";
  circles[index].textContent = "⚫";

  currentIndex = index;
  fiveSecSlider();
}

function fiveSecSlider() {
  fiveSec = setTimeout(() => {
    if (currentIndex < images.length - 1) {
      displayNext();
    } else {
      const firstImg = images[0];
      circles[currentIndex].textContent = "⚪";

      currentImage.className = "";

      currentImage.setAttribute("hidden", true);
      firstImg.removeAttribute("hidden");

      currentImage = firstImg;
      currentImage.className = "active";
      currentIndex = 0;

      circles[0].textContent = "⚫";
      fiveSecSlider();
    }
  }, 2000);
}

fiveSecSlider();
