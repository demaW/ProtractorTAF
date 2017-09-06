var FAQPage = function(){
    var FAQTitle = element(by.id('faq'));

    FAQPage.prototype.open = function() {
        browser.get('https://docs.angularjs.org/misc/faq');
    };

    FAQPage.prototype.isFAQHeaderPresent = function() {
        return FAQTitle.isDisplayed();
    };

};
module.exports = FAQPage;