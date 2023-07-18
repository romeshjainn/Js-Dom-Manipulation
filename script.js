// Creating and storing elements to variables
const body = document.body;
const universal = document.querySelectorAll("*");
const soilArea = document.createElement("div");
const grassArea = document.createElement("div");
const wood = document.createElement("div");
const leafA = document.createElement("div");
const leafB = document.createElement("div");
const leafC = document.createElement("div");
const leafD = document.createElement("div");
const leafE = document.createElement("div");

// Appending all elements to the body
const arr = [soilArea, grassArea, wood, leafA, leafB, leafC, leafD, leafE];

arr.forEach(function (elm) {
  body.appendChild(elm);
});

// Basic reset
universal.forEach(function (element) {
  element.style.margin = "0";
  element.style.padding = "0";
  element.style.boxSizing = "border-box";
});

// Styling body
body.style.height = "100vh";
body.style.backgroundColor = "lightblue";
body.style.position = "relative"; // Added position property

// Styling soil area
soilArea.style.backgroundColor = "brown";
soilArea.style.width = "100%";
soilArea.style.height = "30%";
soilArea.style.position = "absolute";
soilArea.style.bottom = "0";

// Styling grass area
grassArea.style.backgroundColor = "green";
grassArea.style.width = "100%";
grassArea.style.height = "15%";
grassArea.style.position = "absolute";
grassArea.style.bottom = "30%";

// styling wood
wood.style.backgroundColor = "brown";
wood.style.width = "5%";
wood.style.height = "30%";
wood.style.position = "absolute";
wood.style.bottom = "45%";
wood.style.left = "10%";

// lead d and leaf e
const plants = [leafD, leafE];
plants.forEach(function (plant) {
  plant.classList.add("plant");
  plant.style.backgroundColor = "green";
  plant.style.height = "40px";
  plant.style.width = "40px";
  plant.style.position = "absolute";
  plant.style.right = "10%";
  plant.style.bottom = "43%";
  plant.style.borderRadius = "50%";
});

leafE.classList.add("plantTop");

let plantTop = document.getElementsByClassName("plantTop");
for (let i = 0; i < plantTop.length; i++) {
    plantTop[i].style.bottom = "53%"
}
