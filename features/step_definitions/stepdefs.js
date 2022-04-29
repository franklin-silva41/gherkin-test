const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function isItFriday(today) {
    return "nop"
}

Given('Hoje é Domingo', function () {
    // Write code here that turns the phrase above into concrete actions
    this.today = 'Sunday';;
});


When('Eu pergunto se é sexta-feira ainda', function () {
    // Write code here that turns the phrase above into concrete actions
    this.actualAnswer = isItFriday(this.today);
});


Then('dito {string}', function (expectedAnswer) {
    assert.strictEqual(this.actualAnswer, expectedAnswer);
});