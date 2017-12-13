exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['test/e2e/tests/*.js'],
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': { 
            'args': [
	        '--disable-infobars'
            ]
        }
    }	
}
