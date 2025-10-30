// Header Template
export const headerTemplate = `
    <section class="header">
        <div class="header-container">
            <div class="logo-container">
                <a href="#">
                    <img class="logo" src="assets/images/logo.png" alt="logoIcon">
                </a>
            </div>
            <div class="logo-text">
                <p>TodShop</p>
            </div>
            <div class="inputContainer">
                <input type="text" placeholder="">
                <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="19" fill="currentColor"
                        class="bi bi-search" viewBox="0 0 16 16">
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg></button>
            </div>

            <div class="cart-icon-container">
            <span class="cart-total-price " data-bind="text: totalPriceFormatted, visible: cartItems().length > 0"></span>
                <svg class="backetIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="160" fill="currentColor" 
                    viewBox="0 0 16 16" data-bind="click: toggleCart">
                    <path
                        d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6z" />
                </svg>
            </div>
        </div>
    </section>
`;

// Products Grid Template
export const productsGridTemplate = `
    <div class="main-container">
        <!-- ko foreach: products -->
        <div class="card" data-bind="attr: { 'data-price': price }">
            <div class="product-container">
                <img class="card" data-bind="attr: { src: 'assets/images/' + image() }" alt="">
            </div>
            <div class="overlay-container">
                <div class="text">
                    <h2 data-bind="text: price() + ' LDC'"></h2>
                </div>
                <div>
                    <button class="add-to-cart" data-bind="click: $parent.addToCart">Додати до кошика</button>
                </div>

                <div class="icon-container">
                    <div class="iconX"><button><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
                    </svg></button></div>
                </div>
            </div>
            <p class="nameGame" data-bind="text: name()"></p>
        </div>
        <!-- /ko -->
    </div>
`;

// Cart Menu Template
export const cartMenuTemplate = `
    <div id="windowWrapper" class="backetWindowWrapper" data-bind="visible: isCartOpen, click: function() { isCartOpen(false) }"></div>
    
    <div class="cart-menu" data-bind="visible: isCartOpen">
        <div class="cart-menu-items">
            <!-- Cart Items -->
            <!-- ko foreach: cartItems -->
            <div class="card card_settings">
                <div class="product-container">
                    <img class="card" data-bind="attr: { src: 'assets/images/' + image }" alt="">
                </div>
                <div class="overlay-container">
                    <div class="text">
                        <h2 data-bind="text: price + ' LDC'"></h2>
                    </div>
                </div>
                <p class="nameGame" data-bind="text: name"></p>
                <button class="remove-btn" data-bind="click: $parent.removeFromCart">
                    Видалити
                </button>
            </div>
            <!-- /ko -->

            <div class="buyAllItemsWrapper">
                <a href="#">
                    <button class="buyAllItems" data-bind="click: checkout">
                        КУПИТИ
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg>
                    </button>
                </a>
            </div>
        </div>
    </div>
`;

// Banner Template
export const bannerTemplate = `
    <img class="banner" src="assets/images/banner.png" alt="">

    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="arrow" viewBox="0 0 16 16">
        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
    </svg>
`;
