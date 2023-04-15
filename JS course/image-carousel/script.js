// Once you have the slider positioned properly,
// build functions for “next” and “previous” which will advance to the next or previous slide accordingly.
// Make the transitions smooth using simple effects.

// if click on next
// hide this image
// display next image

let currentImage = document.querySelector(".active");
const next = document.querySelector(".right-arrow");

next.addEventListener("click", displayNext);

function displayNext() {
  const activeImage = document.querySelector(".active");
  
  if (activeImage.nextElementSibling) {
    const nextImage = activeImage.nextElementSibling;

    nextImage.className = "active";
    activeImage.className = "";

    activeImage.setAttribute("hidden", true);
    nextImage.removeAttribute("hidden");

    currentImage = nextImage;
  }
}
