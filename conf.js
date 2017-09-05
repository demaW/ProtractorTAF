exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['e2e/homepage/*.spec.js'],
    framework: 'jasmine'
  };