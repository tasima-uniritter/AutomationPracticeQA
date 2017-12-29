'use strict';

var LoginPage = function () {

    constructor
    {
        this.emailCreator = $('#email_create');
        this.submitCreator = $('#SubmitCreate');
        this.expectedConditions = protractor.ExpectedConditions;
        this.buttonLogout = $('.logout');
    }

    this.newAccount = function (email) {
        this.expectedConditions.browser.wait(this.expectedConditions.presenceOf(this.emailCreator), 50000);
        this.emailCreator.sendKeys(email);
        this.submitCreator.click();
    }

    this.signOut = function () {
        this.buttonLogout.click();
    }

    this.signIn = function () {

    }
};

module.exports = LoginPage;
