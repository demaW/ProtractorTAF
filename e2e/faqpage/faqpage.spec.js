var FAQPage = require('./faqpage.po.js');

describe('Test FAQ page', function() {
      it('FAQ title should be displayed', function () {
          var fAQPage = new FAQPage();
          fAQPage.open();
          expect(fAQPage.isFAQHeaderPresent()).toBe(true);
      });
});