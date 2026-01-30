const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "Hello World";


const p = document.createElement("p");
p.style.color = "red";
p.textContent = "Hi! I'm Red!";


const heading= document.createElement("h3");
heading.style.color = "blue";
heading.textContent = "I'm a blue h3"

const box = document.createElement("div");
box.style.border = "5px solid black";
box.style.backgroundColor = "pink";

const boxHeading = document.createElement("h1");
boxHeading.textContent = "I'm in a div";

const boxText = document.createElement("p");
boxText.textContent = "ME TOO!"


box.appendChild(boxHeading);
box.appendChild(boxText);

container.appendChild(content);
container.appendChild(heading);
container.appendChild(p);
container.appendChild(box);

