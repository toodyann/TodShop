const backetMenu = document.querySelector(".backetMenu");
const backetButton = document.querySelector(".backetIcon");
const addButton = document.querySelector(".add-to-cart");
const item = document.getElementById("test");
const delButton = document.getElementById("delBtn");
const backetMenuWrapper = document.getElementById("windowWrapper");

backetMenu.style.display = "none";
backetMenuWrapper.style.display = "none";

let inbacketMenu = false;

backetButton.addEventListener("click", () => {
  if (backetMenuWrapper.style.display === "none") {
    backetMenuWrapper.style.display = "inline";
  } else {
    backetMenuWrapper.style.display = "none";
  }
});
backetButton.addEventListener("click", () => {
  if (backetMenu.style.display === "none") {
    backetMenu.style.display = "inline";
  } else {
    backetMenu.style.display = "none";
  }
});

addButton.addEventListener("click", () => {
  const copy = item.cloneNode(true);
  copy.classList.add("card_settings");
  backetMenu.appendChild(copy);
});
