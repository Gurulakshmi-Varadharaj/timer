'use strict';

//Input is Command Line Argument
const inputs = process.argv.slice(2);

let intInput = [];

//Change the input numbers in string to integer
for (let index = 0; index < inputs.length; index++) {
  intInput.push(parseInt(inputs[index]));
}

//Arrange the number values in array in increasing order
for (let i = 0; i < intInput.length; i++) {
  for (let j = i + 1; j < intInput.length; j++) {
    if (intInput[i] > intInput[j]) {
      let temp = intInput[i];
      intInput[i] = intInput[j];
      intInput[j] = temp;
    }
  }
}

//Logic to make system beep for input timer
for (let idx = 0; idx < intInput.length; idx++) {
  if (intInput[idx] > 0) {
    let timer = intInput[idx] * 1000;  // Timer beeps 1s = 1000 ms
    setTimeout(() => {
      process.stdout.write('\x07');
    }, timer);
  }
}