let numbers = [
  10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100,
  105, 220,
];

let body = document.querySelector("body");
body.style.backgroundColor = "white";
body.style.display = "grid";
body.style.placeItems = "center";
body.style.height = "100vh";

let container = document.createElement("div");
container.style.border = "2px solid black";
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.gap = "10px";

body.appendChild(container);

for (let i = 0; i < numbers.length; i++) {
  let box = document.createElement("div");
  box.style.height = "20%";
  box.style.width = "20%";
  box.style.border = "2px solid black";
  box.innerText = numbers[i];

  if (numbers[i] % 2 === 0) {
    box.style.background = "red";
  } else {
    box.style.background = "blue";
  }

  container.appendChild(box);
}
