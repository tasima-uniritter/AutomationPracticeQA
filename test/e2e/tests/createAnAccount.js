'use strict';

var IndexPage = require('../pages/IndexPage.js');
var EC = protractor.ExpectedConditions;

describe('Automation Practice - Shopping Cart Tests', function() {

    var originalTimeout;

    beforeEach(function() {

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });

    afterEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

    it('Create an account', function() {

        var email = Math.floor((Math.random()*100000)) + '@teste.com.br';

        browser.waitForAngularEnabled(false)
        browser.get('http://automationpractice.com/index.php');

        // Main page, click in login
        element(by.className('login')).click();

        // send informations
        EC.browser.wait(EC.presenceOf(element(by.id('email_create'))), 50000);
        element(by.id('email_create')).sendKeys(email);
        element(by.id('SubmitCreate')).click();

        // page create an account
        browser.wait(EC.presenceOf(element(by.id('email'))), 50000);
        browser.wait(EC.presenceOf(element(by.id('customer_firstname'))), 50000);

        $('#id_gender1').click();
        element(by.name('customer_firstname')).sendKeys('Fulano');
        element(by.name('customer_lastname')).sendKeys('De Tal');
        element(by.name('passwd')).sendKeys('teste');
        element(by.name('days')).sendKeys('10');

        // element.all(by.id('months option')).filter(function(elem, index) {
        //     return elem.getText().then(function(text) {
        //         return text === 'January&nbsp;';
        //     });
        // }).first().click(); // COM ERRO

        element(by.name('years')).sendKeys('1980');
        $('#newsletter').click();
        $('#optin').click();

        //YOUR ADDRESS
        element(by.name('firstname')).sendKeys('Fulano');
        element(by.name('lastname')).sendKeys('De Tal');
        element(by.name('company')).sendKeys('teste');
        element(by.name('address1')).sendKeys('teste');
        element(by.name('address2')).sendKeys('teste');
        element(by.name('city')).sendKeys('teste');


        element.all(by.css('.id_state option')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Florida';
            });
        }).first().click();

        element(by.name('postcode')).sendKeys('12345');
        element.all(by.id('#id_country select')).first();
        element(by.name('other')).sendKeys('teste');
        element(by.name('phone')).sendKeys(Math.floor((Math.random()*100000)));
        element(by.name('phone_mobile')).sendKeys(Math.floor((Math.random()*100000)));
        element(by.name('alias')).sendKeys(Math.floor((Math.random()*100000)) + '@teste.com.br');

        element(by.id('submitAccount')).click();

        // valida login
        EC.browser.wait(EC.presenceOf(element(by.className('header_user_info'))), 50000);

        var title = element(by.className('page-heading'));
        expect(title.getText()).toEqual('My account');

        browser.sleep(10000);
    });

});
