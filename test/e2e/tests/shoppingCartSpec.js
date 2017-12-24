'use strict';

var IndexPage = require('../pages/IndexPage.js');

describe('Automation Practice - Shopping Cart Tests', function() {
  var page;

  beforeEach(function(){
    page = new IndexPage();
    page.get();
  })

  it('Try add item to shopping cart', function() {
   // page.addItemToCartAndContinueShopping();
   // expect(page.getShoppingCartItems()).toEqual('1');
  });

});
