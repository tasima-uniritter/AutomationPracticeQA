'use strict';

var ContactUsPage = function () {
    var subjectHeadingSelect = $('#id_contact');
    var emailInput = $('#email');
    var orderReferenceInput = $('#id_order');
    var messageInput = $('#message');
    var submitMessageButton = $('#submitMessage');

    this.get = function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://automationpractice.com/index.php?controller=contact');
    };

    this.selectOptionSubjectHeadingCombobox = function (optionValue) {
        subjectHeadingSelect.$('[value="' + optionValue + '"]').click();
    };

    this.setEmail = function (email) {
        emailInput.sendKeys(email);
    };

    this.setOrderReference = function (orderReference) {
        orderReferenceInput.sendKeys(orderReference);
    };

    this.setMessage = function (message) {
        messageInput.sendKeys(message);
    };

    this.submitMessage = function () {
        submitMessageButton.click();
    };

    this.failMessage = function () {
        return $('.alert-danger > ol > li').getText();
    };

    this.fillPageForm = function (subjectHeadingOption, email, orderReference, message) {
        if (subjectHeadingOption) {
            this.selectOptionSubjectHeadingCombobox(subjectHeadingOption);
        }
        this.setEmail(email);
        this.setOrderReference(orderReference);
        this.setMessage(message);
    };
};

module.exports = ContactUsPage;
