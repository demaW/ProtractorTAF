var AngularHomePage = function (){
    var nameInput = element(by.model('yourName'));
    var greeting = element(by.binding('yourName'));
    var todoInput = element(by.model('todoList.todoText'));
    var addToDoButton = element(by.xpath('//input[@value="add"]'));
    var todoList = element.all(by.repeater('todo in todoList.todos'));
    var toDoInputElement = {};
    var completedAmount = element.all(by.css('.done-true'));

    AngularHomePage.prototype.setName = function (name) {
        nameInput.sendKeys(name);
    };
    AngularHomePage.prototype.getGreeting = function () {
        return greeting.getText();
    };
    AngularHomePage.prototype.open = function () {
        browser.get('https://angularjs.org');
    };

    AngularHomePage.prototype.addTodoText = function (text) {
        todoInput.sendKeys(text);
    };

    AngularHomePage.prototype.addToDoButtonClick = function () {
        addToDoButton.click();
    };

    AngularHomePage.prototype.getToDoListSize = function () {
        return todoList.count();
    };

    AngularHomePage.prototype.getToListElementByIndex = function (index) {
        return todoList.get(index);
    };

    AngularHomePage.prototype.getToDoElementTextByIndex = function (index) {
        return this.getToListElementByIndex(index).getText();
    };

    AngularHomePage.prototype.toDoInputElementClickByIndex = function (index) {
        toDoInputElement = todoList.get(index).element(by.css('input'));
        toDoInputElement.click();
    };

    AngularHomePage.prototype.getCompletedAmount = function () {
        return completedAmount.count();
    };
};

module.exports = AngularHomePage;