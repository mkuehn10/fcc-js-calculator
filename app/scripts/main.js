/* global $ ko */

$(function() {

  var add = function(a, b) {
    return a + b;
  };

  var subtract = function(a, b) {
    return a - b;
  };

  var multiply = function(a, b) {
    return a * b;
  };

  var divide = function(a, b) {
    return a / b;
  };

  var ViewModel = function() {
    console.log(add(1,2));
    console.log(subtract(1,2));
    console.log(multiply(1,2));
    console.log(divide(4,2));

    var self = this;

    self.queue = [];
    self.display = ko.observable(0);

    self.numberHandler = function(event, data) {
      //console.log(event);
      //console.log(parseInt(data.currentTarget.id));
      self.queue.push(parseInt(data.currentTarget.id));
      self.parseNumber();
    };

    self.parseNumber = function() {
      console.log("Parsing");
      var powerOfTen = self.queue.length - 1;
      var currentNumber = 0;
      self.queue.forEach(function(number) {
        currentNumber += number * Math.pow(10, powerOfTen);

        powerOfTen -= 1;
      });
      console.log(currentNumber);
      self.display(currentNumber);
    };
  };

  var viewModel = new ViewModel();
  ko.applyBindings(viewModel);

});
