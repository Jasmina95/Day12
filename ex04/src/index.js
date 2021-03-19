// Only change code below this line
//var counter = 2;

function sumFibonacci(num) {
  if (num <= 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }

  var sum = 1;

  function fibonacci(var1, var2) {
    if (var2 <= num) {
      if (var2 % 2 !== 0) {
        sum += var2;
      }
      return fibonacci(var2, var2 + var1);
    }
  }
  fibonacci(1, 1);

  return sum;
  /*if (num <= 2) {
    return [1, 1];
  } else {
    counter++;
    const countArray = sumFibonacci(num - 1);
    countArray.push(countArray[countArray.length - 2] + countArray[countArray.length - 1]);
    
    if (num === counter) {
      var sum = 0;
      for (var i = 0; countArray[i] < counter; i++) {
        if (countArray[i] % 2 !== 0) {
          sum += countArray[i];
        }
      }
      counter = 2;
      return sum;
    }
    num++;
    return countArray;
  }*/
}
// Only change code above this line

console.log(sumFibonacci(1)); // Change this line
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));

module.exports = sumFibonacci;
