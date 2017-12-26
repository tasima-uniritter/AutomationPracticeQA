'use strict';

var ShoppingCartPage = function () {

    this.get = function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://automationpractice.com/index.php?controller=order');
    }

}

module.exports = ShoppingCartPage;
