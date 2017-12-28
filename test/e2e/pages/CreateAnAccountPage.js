'use strict';

var IndexPage = require('../pages/IndexPage.js');
var LoginPage = require('../pages/LoginPage.js');

var CreateAnAccountPage = function () {

    var indexPage;
    var loginPage;
    var originalTimeout;
    var EC = protractor.ExpectedConditions;
    var textValidation;

    this.start = function () {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;

        indexPage = new IndexPage();
        loginPage = new LoginPage();
        indexPage.get();
    }

    this.finish = function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    }

    this.createAnAccountWithSucess = function () {
        this.accessLogin(this.generateEmail());
        this.isLoaded();
        this.defineYourPersonalInformation();
        this.defineYourAddress();
        this.submit();
        this.validateAccount();
        loginPage.signOut();
    }

    this.accessLogin = function (email) {
        indexPage.accessLogin();
        loginPage.newAccount(email);
    }

    this.accessLoginError = function () {
        return $('#create_account_error').isPresent();
    }

    this.generateEmail = function () {
        return Math.floor((Math.random() * 100000)) + '@teste.com.br';
    }

    this.isLoaded = function () {
        browser.wait(EC.presenceOf($('#email')), 50000);
        browser.wait(EC.presenceOf($('#customer_firstname')), 50000);
    }

    this.defineYourPersonalInformation = function () {
        $('#id_gender1').click();
        $('#customer_firstname').sendKeys('Fulano');
        $('#customer_lastname').sendKeys('De Tal');
        $('#passwd').sendKeys('teste');
        $('#days').sendKeys('10');
        element.all(by.css('select#months.form-control option')).last().click();
        $('#years').sendKeys('1980');
        $('#newsletter').click();
        $('#optin').click();
    }

    this.defineYourAddress = function () {
        $('#firstname').sendKeys('Fulano');
        $('#lastname').sendKeys('De Tal');
        $('#company').sendKeys('teste');
        $('#address1').sendKeys('teste');
        $('#address2').sendKeys('teste');
        $('#city').sendKeys('teste');
        element.all(by.css('select#id_state.form-control option')).last().click();
        $('#postcode').sendKeys('12345');
        element.all(by.id('#id_country select')).first();
        $('#other').sendKeys('teste');
        $('#phone').sendKeys(Math.floor((Math.random() * 100000)));
        $('#phone_mobile').sendKeys(Math.floor((Math.random() * 100000)));
        $('#alias').sendKeys(Math.floor((Math.random() * 100000)) + '@teste.com.br');
    }

    this.submit = function () {
        $('#submitAccount').click();
    }

    this.validateAccount = function () {
        EC.browser.wait(EC.presenceOf(element(by.className('header_user_info'))), 50000);
        textValidation = element(by.className('page-heading')).getText();
    }

    this.getValidateText = function () {
        return textValidation;
    }
}

module.exports = CreateAnAccountPage;
