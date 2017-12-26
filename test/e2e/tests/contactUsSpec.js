'use strict';

var ContactUsPage = require('../pages/ContactUsPage.js')

describe('Automation Practice - Contact Us Tests', function() {
    var contactUsPage;

    beforeEach(function () {
        contactUsPage = new ContactUsPage();
        contactUsPage.get();
    });

    var expectFailMessage = function (failMessage) {
        expect(contactUsPage.failMessage()).toEqual(failMessage);
    };

    var getMessageText = function (selector) {
        return $(selector).getText();
    };

    it('2B - Deve exibir mensagem de erro ao tentar enviar uma mensagem ao administrador com uma mensagem em branco', function () {
        contactUsPage.fillPageForm(2, "A@A.COM", "123", "");

        contactUsPage.submitMessage();

        expectFailMessage("The message cannot be blank.");
    });

    it('2C - Deve exibir mensagem de erro ao tentar enviar uma mensagem ao administrador sem selecionar um assunto', function () {
        contactUsPage.fillPageForm(null, "A@A.COM", "123", "TEST");

        contactUsPage.submitMessage();

        expectFailMessage("Please select a subject from the list provided.");
    });

    it('2D - Deve exibir mensagem de informação ao selecionar a opção "Customer Service" como assunto', function () {
        contactUsPage.selectOptionSubjectHeadingCombobox(2);

        expect(getMessageText('#desc_contact2')).toEqual('For any question about a product, an order');
    });

    it('2E - Deve exibir mensagem de informação ao selecionar a opção "Webmaster" como assunto', function () {
        contactUsPage.selectOptionSubjectHeadingCombobox(1);

        expect(getMessageText("#desc_contact1")).toEqual('If a technical problem occurs on this website');
    });

    it('2F - Deve exibir mensagem de erro ao tentar enviar uma mensagem ao administrador com um email inválido', function () {
        contactUsPage.fillPageForm(2, "", "", "Teste");

        contactUsPage.submitMessage();

        expectFailMessage("Invalid email address.")
    });

    it('2G - Deve exibir mensagem de sucesso ao enviar uma mensagem ao administrador com todos os campos preenchidos corretamente', function () {
        contactUsPage.fillPageForm(1, "TESTE@TESTE.COM", "REF", "Mensagem");
        contactUsPage.submitMessage();

        expect(getMessageText("p.alert.alert-success")).toEqual('Your message has been successfully sent to our team.');
    });
});
