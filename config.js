// comentar a propriedade 'capabilities' quando for rodar local
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['test/e2e/tests/*.js'],
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': [
                '--disable-infobars', '--headless', '--disable-gpu', '--window-size=800,600'
            ]
        }
    },
    baseUrl: 'http://automationpractice.com'
}
