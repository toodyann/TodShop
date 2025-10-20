document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const cardContainer = button.closest('.card');
            const cardId = cardContainer ? cardContainer.id : 'No ID found';
            
            alert(`До кошика додано елемент: ${cardId}`);
        });
    });
});