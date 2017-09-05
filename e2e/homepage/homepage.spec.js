var AngularHomePage = require('./homepage.po.js');
describe('angularjs homepage todo list', function () {
  beforeAll(function () {
    browser.manage().window().maximize();
  });

  it('should add name and verify greeting', function () {
    var angularHomepage = new AngularHomePage();
    angularHomepage.open();
    angularHomepage.setName("Volo");
    expect(angularHomepage.getGreeting()).toEqual('Hello Volo!');
  });

  it('should add a todo', function () {
    var angularHomepage = new AngularHomePage();

    angularHomepage.open();

    angularHomepage.addTodoText('write first protractor test');
    angularHomepage.addToDoButtonClick();

    expect(angularHomepage.getToDoListSize()).toEqual(3);
    expect(angularHomepage.getToDoElementTextByIndex(2)).toEqual('write first protractor test');

    // You wrote your first test, cross it off the list
    angularHomepage.toDoInputElementClickByIndex(2);
    expect(angularHomepage.getCompletedAmount()).toEqual(2);
  });
});