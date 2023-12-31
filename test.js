const universal = document.querySelectorAll("*");
for (let i = 0; i < universal.length; i++) {
  universal[i].style.margin = "0";
  universal[i].style.padding = "0";
  universal[i].style.boxSizing = "border-box";
}

const body = document.querySelector("body");
body.style.backgroundColor = "yellow";
body.style.height = "100vh";
body.style.display = "grid";
body.style.justifyContent = "center";
body.style.gridGap = "2px solid";
body.style.placeItems = "center";

let container = document.createElement("div");
container.style.height = "300px";
container.style.aspectRatio = "1";
container.style.backgroundColor = "blue";
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.gap = "2px";

body.appendChild(container);

for (let i = 0; i < 36; i++) {
  let boxes = document.createElement("div");
  boxes.style.height = "30px";
  boxes.style.aspectRatio = "1";
  boxes.style.backgroundColor = "red";
  container.appendChild(boxes);

  if (i % 2 === 0) {
    boxes.style.backgroundColor = "white";
  }
}
