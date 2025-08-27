// heartBtn function
let count = 0;
const heartbtn = document.getElementsByClassName("heartBtn");

for (let heart of heartbtn) {
  heart.addEventListener("click", () => {
    count++;
    document.getElementById("heartCount").innerHTML = count;
  });
}
//resuable functions
function getElement(id) {
  const element = document.getElementById(id);

  return element;
}
