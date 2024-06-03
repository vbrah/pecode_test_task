const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportFilename: 'mochawesome_report',
    overwrite: false,
    html: true,
    json: false,
  },
  video: true,
  screenshotOnRunFailure: true,
  screenshotsFolder: 'cypress/reports/screenshots',
  videosFolder: 'cypress/reports/videos',
  e2e: {
    specPattern: 'cypress/features/*.{feature,features}',
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
    },
  },
});
