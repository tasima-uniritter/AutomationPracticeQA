'use strict';

var LoginPage = function () {

    var EC = protractor.ExpectedConditions;

    this.newAccount = function (email) {
        EC.browser.wait(EC.presenceOf(element(by.id('email_create'))), 50000);
        element(by.id('email_create')).sendKeys(email);
        element(by.id('SubmitCreate')).click();
    }

    this.signOut = function () {
        $('.logout').click();
    }
}

module.exports = LoginPage;
