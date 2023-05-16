const test = document.querySelector(".test");

const arr = ["blu", "blu", "blu", "white", "blu", "red", "yellow"];

// filter
const testFilter = document.createElement("div");
test.appendChild(testFilter);

const arrFilter = arr.filter((word) => word.length > 3);
const arrFilterTwo = arr.filter((word) => word.length <= 3);
testFilter.textContent =
  "filter: " + arrFilter + " > other filter: " + arrFilterTwo;

//map
const testMap = document.createElement("div");
test.appendChild(testMap);

const arrMap = arr.map((word) =>
  word === "blu" ? (word = "white") : (word = word)
);
testMap.textContent = "map: " + arrMap;
