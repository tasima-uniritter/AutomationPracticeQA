'use strict';

var IndexPage = require('../pages/IndexPage.js');
var LoginPage = require('../pages/LoginPage.js');

var CreateAnAccountPage = function(){

    var indexPage;
    var loginPage;
    var originalTimeout;
    var EC = protractor.ExpectedConditions;

    this.start = function(){
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;

        indexPage = new IndexPage();
        loginPage = new LoginPage();
        indexPage.get();
    }

    this.finish = function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    }

    this.createAnAccount = function () {

        indexPage.accessLogin();
        loginPage.newAccount(this.generateEmail());
        this.isLoaded();
        this.defineYourPersonalInformation();
        this.defineYourAddress();
        this.submit();
        this.validadeAccount();
    }

    this.generateEmail = function () {
        return Math.floor((Math.random()*100000)) + '@teste.com.br';
    }

    this.isLoaded = function () {
        browser.wait(EC.presenceOf(element(by.id('email'))), 50000);
        browser.wait(EC.presenceOf(element(by.id('customer_firstname'))), 50000);
    }

    this.defineYourPersonalInformation = function () {
        $('#id_gender1').click();
        element(by.name('customer_firstname')).sendKeys('Fulano');
        element(by.name('customer_lastname')).sendKeys('De Tal');
        element(by.name('passwd')).sendKeys('teste');
        element(by.name('days')).sendKeys('10');

        element.all(by.css('select#months.form-control option')).last().click();

        element(by.name('years')).sendKeys('1980');
        $('#newsletter').click();
        $('#optin').click();
    }

    this.defineYourAddress = function () {
        element(by.name('firstname')).sendKeys('Fulano');
        element(by.name('lastname')).sendKeys('De Tal');
        element(by.name('company')).sendKeys('teste');
        element(by.name('address1')).sendKeys('teste');
        element(by.name('address2')).sendKeys('teste');
        element(by.name('city')).sendKeys('teste');
        element.all(by.css('select#id_state.form-control option')).last().click();
        element(by.name('postcode')).sendKeys('12345');
        element.all(by.id('#id_country select')).first();
        element(by.name('other')).sendKeys('teste');
        element(by.name('phone')).sendKeys(Math.floor((Math.random()*100000)));
        element(by.name('phone_mobile')).sendKeys(Math.floor((Math.random()*100000)));
        element(by.name('alias')).sendKeys(Math.floor((Math.random()*100000)) + '@teste.com.br');
    }

    this.submit = function () {
        element(by.id('submitAccount')).click();
    }

    this.validadeAccount = function () {
        EC.browser.wait(EC.presenceOf(element(by.className('header_user_info'))), 50000);
        expect(element(by.className('page-heading')).getText()).toEqual('MY ACCOUNT');
    }
}

module.exports = CreateAnAccountPage;
