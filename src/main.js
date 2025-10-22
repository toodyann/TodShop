document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
          console.log('Button clicked');
            event.preventDefault();
            const cardContainer = button.closest('.card');
            const cardId = cardContainer ? cardContainer.id : 'No ID found';
            
            alert(`До кошика додано елемент: ${cardId}`);
        });
    });
});


const backetMenu = document.querySelector(".backetMenu");
const backetIcon = document.querySelector(".backetIcon");

backetMenu.style.display = "none";

backetIcon.addEventListener('click', () => {
    if (backetMenu.style.display === 'none') {
      backetMenu.style.display = 'inline';
    } else {
      backetMenu.style.display = 'none';
    }
  });




