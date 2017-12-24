'use strict';

var CreateAnAccountPage = require('../pages/CreateAnAccountPage.js');

describe('Automation Practice - Shopping Cart Tests', function() {

    var createAnAccountPage;

    beforeEach(function() {
        createAnAccountPage = new CreateAnAccountPage();
        createAnAccountPage.start();
    });

    afterEach(function() {
        createAnAccountPage.finish();
    });

    it('Create an account', function() {
        createAnAccountPage.createAnAccount();
    });

});
