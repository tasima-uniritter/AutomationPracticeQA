'use strict';
//var AuthenticatedPage = require('./AuthenticatedPage.js')

var IndexPage = function(){
  var contactUsButton = $('#contact-link');

  this.get = function(){
    browser.waitForAngularEnabled(false);
    browser.get('http://automationpractice.com/index.php');
  }

  this.accessContactUs = function () {
    contactUsButton.click();
  }

//  this.validLogin = function() {
//    emailInput.sendKeys('mauricio.webdev@gmail.com')
//    passwordInput.sendKeys('testeteste');
//    sigInButton.click();
//
//    return new AuthenticatedPage();
//  }
//
//  this.failMessage = function(){
//    return $('.alert-danger > ol > li').getText();
//  }



}

module.exports = IndexPage;
