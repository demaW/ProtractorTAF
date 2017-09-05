var AngularHomePage = function () {
    var nameInput = element(by.model('yourName'));
    var greeting = element(by.binding('yourName'));
   
    this.setName = function (name) {
        nameInput.sendKeys(name);
    };
    this.getGreeting = function () {
        return greeting.getText();
    };
    this.open = function () {
        browser.get('https://angularjs.org');
    };
};
module.exports = AngularHomePage;