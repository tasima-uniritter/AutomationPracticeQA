'use strict';

var CreateAnAccountPage = require('../pages/CreateAnAccountPage.js');

describe('Automation Practice - Create an Account Tests', function () {

    var createAnAccountPage;

    beforeEach(function () {
        createAnAccountPage = new CreateAnAccountPage();
        createAnAccountPage.start();
    });

    afterEach(function () {
        createAnAccountPage.finish();
    });

    it('3A - Cadastro com sucesso de um novo usuário', function () {
        createAnAccountPage.createAnAccountWithSucess();
        expect(createAnAccountPage.getValidateText()).toEqual('MY ACCOUNT');
    });

    it('3B - Tentativa de cadastro com email inválido', function () {
        createAnAccountPage.accessLogin('emailNaoValido');
        expect(createAnAccountPage.accessLoginError()).toBe(true);
    });

});
