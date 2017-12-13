'use strict';

var IndexPage = function(){
  var contactUsButton = $('#contact-link');
  var shoppingCartButton = $('.shopping_cart');
  var firstItemButton = $('.button-container > a:first');
  var continueShoppingButton = $('.continue.btn.btn-default.button.exclusive-medium');
  var quantityInCart = $('.ajax_cart_quantity.unvisible');

  this.get = function(){
    browser.waitForAngularEnabled(false);
    browser.get('http://automationpractice.com/index.php');
  }

  this.accessContactUs = function () {
    contactUsButton.click();
  }
  
  this.accessShoppingCart = function () {
	shoppingCartButton.click();
  }
  
  this.addItemToCartAndContinueShopping = function () {
	firstItemButton.click();
	continueShoppingButton.click();
  }
  
  this.getShoppingCartItems = function () {
	  return quantityInCart.getText();
  }

}

module.exports = IndexPage;
