'use strict';

var IndexPage = require('../pages/IndexPage.js');
var LoginPage = require('../pages/LoginPage.js');

var CreateAnAccountPage = function () {

    constructor
    {
        this.indexPage = new IndexPage();
        this.loginPage = new LoginPage();
        this.originalTimeout;
        this.expectedConditions = protractor.ExpectedConditions;
        this.textValidation;

        this.email = $('#email');
        this.idGender = $('#id_gender1');
        this.customerFirstname = $('#customer_firstname');
        this.customerLastname = $('#customer_lastname');
        this.passwd = $('#passwd');
        this.days = $('#days');
        this.years = $('#years');
        this.newsletter = $('#newsletter');
        this.optin = $('#optin');
        this.firstname = $('#firstname');
        this.lastname = $('#lastname');
        this.company = $('#company');
        this.address1 = $('#address1');
        this.address2 = $('#address2');
        this.city = $('#city');
        this.postcode = $('#postcode');
        this.other = $('#other');
        this.phone = $('#phone');
        this.phoneMobile = $('#phone_mobile');
        this.alias = $('#alias');

        this.submitAccount = $('#submitAccount');
        this.accountError = $('#create_account_error');
    }

    this.start = function () {
        this.originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;

        this.indexPage.get();
    }

    this.finish = function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = this.originalTimeout;
    }

    this.createAnAccountWithSucess = function () {
        this.accessLogin(this.generateEmail());
        this.isLoaded();
        this.defineYourPersonalInformation();
        this.defineYourAddress();
        this.submit();
        this.validateAccount();
        this.loginPage.signOut();
    }

    this.accessLogin = function (email) {
        this.indexPage.accessLogin();
        this.loginPage.newAccount(email);
    }

    this.accessLoginError = function () {
        return this.accountError.isPresent();
    }

    this.generateEmail = function () {
        return Math.floor((Math.random() * 100000)) + '@teste.com.br';
    }

    this.isLoaded = function () {
        browser.wait(this.expectedConditions.presenceOf(this.email), 50000);
        browser.wait(this.expectedConditions.presenceOf(this.customerFirstname), 50000);
    }

    this.defineYourPersonalInformation = function () {
        this.idGender.click();
        this.customerFirstname.sendKeys('Fulano');
        this.customerLastname.sendKeys('De Tal');
        this.passwd.sendKeys('teste');
        this.days.sendKeys('10');
        element.all(by.css('select#months.form-control option')).last().click();
        this.years.sendKeys('1980');
        this.newsletter.click();
        this.optin.click();
    }

    this.defineYourAddress = function () {
        this.firstname.sendKeys('Fulano');
        this.lastname.sendKeys('De Tal');
        this.company.sendKeys('teste');
        this.address1.sendKeys('teste');
        this.address2.sendKeys('teste');
        this.city.sendKeys('teste');
        element.all(by.css('select#id_state.form-control option')).last().click();
        this.postcode.sendKeys('12345');
        element.all(by.id('#id_country select')).first();
        this.other.sendKeys('teste');
        this.phone.sendKeys(Math.floor((Math.random() * 100000)));
        this.phoneMobile.sendKeys(Math.floor((Math.random() * 100000)));
        this.alias.sendKeys(Math.floor((Math.random() * 100000)) + '@teste.com.br');
    }

    this.submit = function () {
        this.submitAccount.click();
    }

    this.validateAccount = function () {
        this.expectedConditions.browser.wait(this.expectedConditions.presenceOf(element(by.className('header_user_info'))), 50000);
        this.textValidation = element(by.className('page-heading')).getText();
    }

    this.getValidateText = function () {
        return this.textValidation;
    }
}

module.exports = CreateAnAccountPage;
