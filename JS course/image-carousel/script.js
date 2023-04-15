// Once you have the slider positioned properly,
// build functions for “next” and “previous” which will advance to the next or previous slide accordingly.
// Make the transitions smooth using simple effects.

// if click on next
// hide this image
// display next image

let currentImage = document.querySelector(".active");
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
  }
}
