'use strict';

var ShoppingCartPage = function () {
	var totalItemsValue = $('#total_price');
	var cartItems = $$('.cart_item');
	var quantityInCart = $$('.ajax_cart_quantity').first();
	
    this.get = function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://automationpractice.com/index.php?controller=order');
    }

	this.removeItem = function (elementIndex) {
		$$('.cart_quantity_delete').get(elementIndex).click();
	};
	
	this.getAlertMessage = function () {
		return $('.alert.alert-warning').getText();
	};
	
	this.getTotalItemsValue = function () {
		return totalItemsValue.getText().then(function(text) {
		  return parseFloat(text.replace(/$/g, ""));
		});
	};
	
	this.getTotalValueFromCartItem = function (elementIndex) {
		return cartItems.get(elementIndex).$('.cart_total').$('.price').getText().then(function(text) {
		  return parseFloat(text.replace(/$/g, ""));
		});
	};
	
	this.getShoppingCartItems = function () {
        return quantityInCart.getText();
    };
}

module.exports = ShoppingCartPage;
