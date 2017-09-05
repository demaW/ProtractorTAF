var AngularHomePage = require('./homepage.po.js');
describe('angularjs homepage todo list', function () {
  beforeAll(function () {
    browser.manage().window().maximize();
  });

  it('should add name and verify greeting', function(){
    var angularHomepage = new AngularHomePage();
    angularHomepage.open();
    angularHomepage.setName("Volo");
    expect(angularHomepage.getGreeting()).toEqual('Hello Volo!');
  });

  it('should add a todo', function () {
    var angularHomepage = new AngularHomePage();

    angularHomepage.open();

    element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    element(by.xpath('//input[@value="add"]')).click();

    var todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(3);
    expect(todoList.get(2).getText()).toEqual('write first protractor test');

    // You wrote your first test, cross it off the list
    todoList.get(2).element(by.css('input')).click();
    var completedAmount = element.all(by.css('.done-true'));
    expect(completedAmount.count()).toEqual(2);
  });
});