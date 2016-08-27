/* global $ ko */

$(function() {
  var operators = ['+', '-', 'x', '/'];

  // var add = function(a, b) {
  //   return a + b;
  // };

  // var subtract = function(a, b) {
  //   return a - b;
  // };

  // var multiply = function(a, b) {
  //   return a * b;
  // };

  // var divide = function(a, b) {
  //   return a / b;
  // };

  var ViewModel = function() {
    //console.log(add(1,2));
    //console.log(subtract(1,2));
    //console.log(multiply(1,2));
    //console.log(divide(4,2));


    var self = this;

    self.queue = [];
    self.display = ko.observable(0);
    self.result = ko.observable();
    self.resultAllowed = ko.observable(false);
    self.operatorAllowed = ko.observable(false);
    self.decimalAllowed = ko.observable(true);
    self.zeroAllowed = ko.observable(false);

    self.numberHandler = function(event, data) {
      if (operators.indexOf(data.currentTarget.id) == -1) {
        self.operatorAllowed(true);
      } else {
        self.operatorAllowed(false);
      }
      if (self.display() == 0 & data.currentTarget.id == '.') {
        self.queue.push('0');
        self.queue.push(data.currentTarget.id);
      } else {
        self.queue.push(data.currentTarget.id);
      }
      self.display(self.queue.join(''));
    };

    self.equalHandler = function() {
      self.result(eval(self.queue.join('')).toString().substring(0, 9));
      self.resultAllowed(true);
    };

    self.clearHandler = function() {
      self.display(0);
      self.queue = [];
      self.resultAllowed(false);
    };

    // self.numberHandler = function(event, data) {
    //   //console.log(event);
    //   //console.log(parseInt(data.currentTarget.id));
    //   self.queue.push(parseInt(data.currentTarget.id));
    //   self.parseNumber();
    // };

    // self.parseNumber = function() {
    //   //console.log("Parsing");
    //   var powerOfTen = self.queue.length - 1;
    //   var currentNumber = 0;
    //   self.queue.forEach(function(number) {
    //     currentNumber += number * Math.pow(10, powerOfTen);

    //     powerOfTen -= 1;
    //   });
    //   //console.log(currentNumber);
    //   self.display(currentNumber);
    // };
  };

  var viewModel = new ViewModel();
  ko.applyBindings(viewModel);

});
