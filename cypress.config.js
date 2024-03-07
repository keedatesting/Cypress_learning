const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 8000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    env:
    {

      url: 'https://rahulshettyacademy.com'

    },

    specPattern: 'cypress/integration/examples/*.js'
  },
});
