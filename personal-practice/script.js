const test = document.querySelector(".test")

const arr = ["blu", "blu", "blu", "white", "blu", "red", "yellow"]

// filter
const arrFilter = arr.filter(word => word.length > 3)

const testFilter = document.createElement("div")
test.appendChild(testFilter)

testFilter.textContent = " filter: " + arrFilter 



