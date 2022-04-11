// Positive numbers

let numbers = [-21, -12, -11, -9, -5, 0, 1, 6, 17, 20, 22];
let positiveNumbers = [];

for (let num in numbers) {
  let number = numbers[num];

  if (number > 0) {
    positiveNumbers.push(number);
  }
}

console.log(positiveNumbers);
