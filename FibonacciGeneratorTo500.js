//Fibonacci generator up until 500

function fibonacciGenerator(n) {
  var output = [];

  while (n < 16) {
    if (n === 1) {
      output = [0];
    } else if (n === 2) {
      output = [0, 1];
    } else {
      output = [0, 1];

      for (var i = 2; i < n; i++) {
        output.push(output[output.length - 2] + output[output.length - 1]);
      }
    }
    console.log(output);
    return output;
  }
}

fibonacciGenerator(15);
