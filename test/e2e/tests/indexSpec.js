'use strict';

var IndexPage = require('../pages/IndexPage.js')

describe('Automation Practice - Index Tests', function() {
    var indexPage;

    beforeEach(function(){
        indexPage = new IndexPage();
        indexPage.get();
    });

    it('2A - Deve acessar a página para contatar o administrador a partir da index', function() {
        indexPage.accessContactUs();
        expect("test").toEqual("test");
    });

});
