'use strict';

var IndexPage = require('../pages/IndexPage.js');
var ShoppingCartPage = require('../pages/ShoppingCartPage.js');

describe('Automation Practice - Shopping Cart Tests', function () {
    var indexPage;
	var shoppingCartPage;

    beforeEach(function () {
		indexPage = new IndexPage();
		shoppingCartPage = new ShoppingCartPage();
		
		indexPage.get();
    })

    it('1A - Adicionar o primeiro item ao carrinho de compras na página inicial', function () {
        indexPage.addItemToCart(0);
		browser.sleep(1000);
		
		indexPage.continueShopping();
		browser.sleep(1000);
        
		expect(indexPage.getShoppingCartItems()).toEqual('1');
    });
	
	it('1B - Remover item do carrinho acessando a página do carrinho de compras', function () {
		shoppingCartPage.get();
		
		indexPage.accessShoppingCart();
		browser.sleep(1000);
		
		shoppingCartPage.removeItem(0);
		browser.sleep(1000);
		
		expect(shoppingCartPage.getAlertMessage()).toEqual('Your shopping cart is empty.');
		
	});
	
	it('1C - Adicionar dois itens ao carrinho e remover um para validar o preço total', function () {
		indexPage.addItemToCart(0);
		browser.sleep(1000);
		
		indexPage.continueShopping();
		browser.sleep(1000);
		
		indexPage.addItemToCart(1);
		browser.sleep(1000);
		
		indexPage.continueShopping();
		browser.sleep(1000);
		
		shoppingCartPage.get();
		
		indexPage.accessShoppingCart();
		browser.sleep(1000);
		
		var totalItemsValue = shoppingCartPage.getTotalItemsValue();
		var totalItem = shoppingCartPage.getTotalValueFromCartItem(1);
		
		shoppingCartPage.removeItem(1);
		browser.sleep(1000);
		
		expect(totalItemsValue - totalItem).toEqual(shoppingCartPage.getTotalItemsValue());
	});
	
	it('1D - Visualizar detalhes do item, adicionar no carrinho e o mesmo alterar a quantidade no carrinho de compra', function () {
		indexPage.selectItemToViewDetais(0);
		browser.sleep(1000);
		
		indexPage.addToCart();
		browser.sleep(1000);
		
		indexPage.proceedToCheckoutClick();
		browser.sleep(1000);
		
		expect(shoppingCartPage.getShoppingCartItems()).toEqual('2');
	});
	
	it('1E - Visualizar detalhes do item, adicionar no carrinho e o mesmo alterar a quantidade no carrinho de compra', function () {
		indexPage.selectItemToViewDetais(0);
		browser.sleep(1000);
		
		indexPage.addToCart();
		browser.sleep(1000);
		
		indexPage.proceedToCheckoutClick();
		browser.sleep(1000);
		
		expect(shoppingCartPage.getShoppingCartItems()).toEqual('3');
	});

});
