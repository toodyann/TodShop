document.addEventListener("DOMContentLoaded", () => {
  const backetMenu = document.querySelector(".backetMenu");
  const backetButton = document.querySelector(".backetIcon");
  const backetMenuWrapper = document.getElementById("windowWrapper");
  const totalPriceBox = document.getElementById("totalPrice");

  backetMenu.style.display = "none";
  backetMenuWrapper.style.display = "none";
  totalPriceBox.style.display = "none";

  let total = 0;

  backetButton.addEventListener("click", () => {
    backetMenuWrapper.style.display =
      backetMenuWrapper.style.display === "none" ? "inline" : "none";
    backetMenu.style.display =
      backetMenu.style.display === "none" ? "inline" : "none";
    totalPriceBox.style.display =
      totalPriceBox.style.display === "none" ? "inline" : "none";
  });

  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      const card = button.closest(".card");
      if (!card) return;

      const price = Number(card.dataset.price) || 0;
      total += price;
      totalPriceBox.textContent = "Сума: " + total + " LDC";

      const copy = card.cloneNode(true);
      copy.classList.add("card_settings");

      const addBtnClone = copy.querySelector(".add-to-cart");
      if (addBtnClone) addBtnClone.remove();
      
      backetMenu.appendChild(copy);
      });
    });
  });
