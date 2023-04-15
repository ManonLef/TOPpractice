// Once you have the slider positioned properly,
// build functions for “next” and “previous” which will advance to the next or previous slide accordingly.
// Make the transitions smooth using simple effects.

// if click on next
// hide this image
// display next image

const images = document.querySelectorAll("img");
let currentImage = images[0]
let currentIndex = 0
const next = document.querySelector(".right-arrow");
const previous = document.querySelector(".left-arrow");

next.addEventListener("click", displayNext);
previous.addEventListener("click", displayPrevious);

function displayNext() {
  if (currentImage.nextElementSibling) {
    const nextImage = currentImage.nextElementSibling;

    nextImage.className = "active";
    currentImage.className = "";

    currentImage.setAttribute("hidden", true);
    nextImage.removeAttribute("hidden");

    currentImage = nextImage;
    currentIndex += 1
  }
}

function displayPrevious() {
  if (currentImage.previousElementSibling) {
    const previousImage = currentImage.previousElementSibling;

    previousImage.className = "active";
    currentImage.className = "";

    currentImage.setAttribute("hidden", true);
    previousImage.removeAttribute("hidden");

    currentImage = previousImage;
    currentIndex -= 1
  }
}

// Add in some navigation dots at the bottom of the slides.
// Make a horizontal series of empty circles with CSS immediately below the slideshow.
// Each circle represents a slide, so whenever a new slide is activated,
// its corresponding circle gets filled in so you can tell where in the show you are.
// Make each circle link to that particular slide, so you can click on the circle and it will jump to that slide.

const circleContainer = document.querySelector(".circles"); // ●

function addCircles() {
  console.log(images);
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("data-value", i);

    const newCircle = document.createElement("div");
    newCircle.setAttribute("data-value", i)
    newCircle.className ="circle"
    newCircle.textContent ="○"
    circleContainer.appendChild(newCircle)

    newCircle.addEventListener("click", changeImage)
  }
}

addCircles();
const circles = document.querySelectorAll(".circle");
circles[currentIndex].textContent = "●" 

function changeImage() {
  const index = this.getAttribute("data-value")

  currentImage.setAttribute("hidden", true)
  currentImage = images[index]

  images[index].removeAttribute("hidden")
  circles[currentIndex].textContent = "○"
  circles[index].textContent = "●"

  currentIndex = index
}

// next up: simplify with circle render check based on active status
