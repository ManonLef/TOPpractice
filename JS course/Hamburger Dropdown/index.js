document.querySelector(".menu-container").addEventListener("click", unhideHamburger)

function unhideHamburger() {
  const element = this.nextElementSibling
  element.removeAttribute("hidden")
}