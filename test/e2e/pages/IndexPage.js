'use strict';

var IndexPage = function () {
    var contactUsButton = $('#contact-link');
    var shoppingCartButton = $('.shopping_cart > a');
    
	var buyButton = $$('.button.ajax_add_to_cart_button.btn.btn-default');
    var continueShoppingButton = $('.continue.btn.btn-default.button.exclusive-medium');
    var quantityInCart = $('.ajax_cart_quantity.unvisible');
	var items = $$('.product_img_link');
	var proceedToCheckout = $('.btn.btn-default.button.button-medium');

    this.get = function () {
        browser.waitForAngularEnabled(false);
        browser.get('/index.php');
    };

    this.accessContactUs = function () {
        contactUsButton.click();
    };

    this.accessShoppingCart = function () {
        shoppingCartButton.click();
    };

    this.addItemToCart = function (elementIndex) {
		buyButton.get(elementIndex).click();
	}
	
	this.continueShopping = function () {
        continueShoppingButton.click();
    };

    this.getShoppingCartItems = function () {
        return quantityInCart.getText();
    };
	
	this.selectItemToViewDetais = function (elementIndex) {
		items.get(elementIndex).click();
	};
	
	this.addToCart = function () {
		element(by.name('Submit')).click();
	};
	
	this.proceedToCheckoutClick = function (){
		proceedToCheckout.click();
	};

    this.accessLogin = function () {
        element(by.className('login')).click();
    };

};

module.exports = IndexPage;
