import ko from 'knockout';
import { productsData } from './data.js';
import { headerTemplate, productsGridTemplate, cartMenuTemplate, bannerTemplate } from './templates.js';

function ShopViewModel() {
    const self = this;

    self.products = ko.observableArray(
        productsData.map(product => ({
            id: product.id,
            name: ko.observable(product.name),
            price: ko.observable(product.price),
            image: ko.observable(product.image)
        }))
    );

    self.cartItems = ko.observableArray([]);
    self.isCartOpen = ko.observable(false);

    self.totalPrice = ko.computed(() => {
        return self.cartItems().reduce((sum, item) => sum + item.price, 0);
    });

    self.totalPriceFormatted = ko.computed(() => `Сума: ${self.totalPrice()} LDC`);

    self.cartItemCount = ko.computed(() => self.cartItems().length);

    self.cartItemsFormatted = ko.computed(() => self.cartItems().map((item, index) => ({
        ...item,
        index: index
    }))
    );

    self.addToCart = product => {
        self.cartItems.push({
            id: product.id,
            name: product.name(),
            price: product.price(),
            image: product.image()
        });
    };

    self.removeFromCart = (item) => {
        self.cartItems.remove(item);
    };

    self.toggleCart = () => {
        self.isCartOpen(!self.isCartOpen());
    };

    self.clearCart = () => {
        self.cartItems.removeAll();
    };

    self.checkout = function () {
        if (self.cartItems().length === 0) {
            alert("Кошик порожній!");
            return;
        }
        alert(`Замовлення на суму ${self.totalPrice()} LDC! Дякуємо за покупку!`);
        self.clearCart();
        self.isCartOpen(false);
    };
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('app-header').innerHTML = headerTemplate;
    const mainSection = document.getElementById('app-main');
    mainSection.innerHTML = productsGridTemplate + bannerTemplate + cartMenuTemplate;

    const viewModel = new ShopViewModel();
    ko.applyBindings(viewModel);
});
