const { defineConfig } = require('cypress')

module.exports = {
	e2e: {
		setupNodeEvents(on, config) {},
		// baseUrl: 'https://www.lambdatest.com/selenium-playground/',
		viewportHeight: 768,
		viewportWidth: 1024,
		video: true,
		experimentalSessionAndOrigin: false
	},
};