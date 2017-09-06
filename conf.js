var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['e2e/*/*.spec.js'],
  framework: 'jasmine',
  onPrepare: function () {
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: 'target/report',
        takeScreenshotsOnlyOnFailures: true,
        cleanDestination: true,
        fileName: 'report'
      })
    );
    browser.manage().window().maximize();
  },
  jasmineNodeOpts: {
    showColors: true
  }
};