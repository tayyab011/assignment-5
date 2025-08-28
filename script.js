//resuable for id functions
function getElement(id) {
  const element = document.getElementById(id);

  return element;
}


//resuable for class functions
function getClassName(clas) {
  const classes = document.getElementsByClassName(clas);

  return classes;
}


// heartBtn function
let count = 0;
const heartbtn = getClassName("heartBtn");

for (let heart of heartbtn) {
  heart.addEventListener("click", () => {
    count++;
    getElement("heartCount").innerHTML = count;
  });
}

// callBtn function
let star = Number(getElement("starCount").innerText);
let cartBox = getElement("cart-box");
const callBtns = getClassName("card-call");
for (let callBtn of callBtns) {
  callBtn.addEventListener("click", () => {
    const title = callBtn.parentNode.parentNode.childNodes[3].innerHTML;
    const subTitle = callBtn.parentNode.parentNode.childNodes[5].innerHTML;
    const number = callBtn.parentNode.parentNode.childNodes[7].innerHTML;

    if (star >= 20) {
      star -= 20;
      getElement("starCount").innerHTML = star;

      alert(`📞calling ${subTitle} ${number}...`);
      let time = new Date().toLocaleTimeString();
      let div = document.createElement("div");
      div.innerHTML = `
 <div class="flex justify-between items-center gap-4 bg-[#F5FFF6] p-3">
<div class="space-y-1">
  <h3 class="font-bold text-[12px]">${title}</h3>
  <p class="text-gray-500 text-[12px]">${number}</p>
</div>
<p class="text-gray-500 text-xs font-semibold">${time}</p>
</div>
 
 `;
      cartBox.appendChild(div);

      getElement("clear").addEventListener("click", () => {
        cartBox.innerHTML = "";
      });
    } else {
      alert(
        ` ❌ You don’t have enough coins. You need at least 20 coins to make a call`
      );
    }
  });
}

//copy functions

let copyCount = 0;
const copyBtns = getClassName("card-copy");

for (let copyBtn of copyBtns) {
  copyBtn.addEventListener("click", () => {
    const number = copyBtn.parentNode.parentNode.childNodes[7].innerHTML;

    navigator.clipboard.writeText(number);

    alert(`Number ${number} copied to clipboard`);

    copyCount++;
    getElement("copyButtons").innerHTML = copyCount;
  });
}
