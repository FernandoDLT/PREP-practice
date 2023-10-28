// PREP

// --FizzBuzz--
// Given a number as an input, print out every integer from 1 to that number.
// However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”;
// when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

// num input print int 1 to num 3/fizz 5/buzz 3/5 fizzbuzz
// num -> num > 1 no funny biz
// 1 to num including 5 1,5
// num/3 fizz ; num /5 buzz; num 3/5 fizzbuzz; console.log is ok
// n = 5 -> 1,2,fizz,4,buzz
// n = 9 -> 1,2,fizz,4,buzz,fizz,7,8,fizz
// n = 15 -> 1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13
// 14,fizzbuzz

function fizzBuzz(num){
  //loop 1 to num
  for(let i = 1; i<=num; i++){
    //conditional
    //if num%3 && num%5 --- 0 -> fizzbuzz
    //if num%3 -> 0 fizz
    //if num%5 -> 0 buzz
    //log num
    if(i % 3 === 0 && i % 5 === 0){
      console.log('fizzbuzz')
    }else if(i % 3 === 0){
      console.log('fizz')
    }else if(i % 5 === 0){
      console.log('buzz')
    }else{
      console.log(i)
    }
  }
}

// function fizzBuzz(num){
//    for (let i = 1; i <= num; i++) {
//       if(i % 3 === 0 & i % 5 == 0) {
//          console.log("fizzBuzz")
//       } else if (i % 3 === 0) {
//          console.log("Fizz")
//       } else if (i % 5 === 0) {
//          console.log("Buzz")
//       } else {
//          console.log(i)
//       }
//    }
// }

fizzBuzz(5) //1,2,fizz,4,buzz
fizzBuzz(9) //1,2,fizz,4,buzz,fizz,7,8,fizz
fizzBuzz(15) //1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz
// fizzBuzz(100)
// -----------------------------------------------------------------------------------------------------------

// --Sum Mixed Arrays--
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
// assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);
// assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);

// arr -> str & num - no funny biz
// num -> sum

function addEmUp(arr) {
   // sum all of the nums in the arr
   // loop through all nums and add together
   // reduce -> convert to nums and sum
   // return arr.reduce((a, c) => a + + c, 0)
   return arr.reduce((a, c) => a+ +c, 0)
}

console.log(addEmUp(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42)
console.log(addEmUp([9, 3, '7', '3']), 22)

function addSingles(arr) {
   return arr.reduce((a, c) => a+ +c, 0)
}
addSingles
console.log(addSingles(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42)
console.log(addSingles([9, 3, '7', '3']), 22)


// -----------------------------------------------------------------------------------------------------------


// --Average Array--

// It's the academic year's end, fateful moment of your school report. The averages must be calculated. 
// All the students come to you and entreat you to calculate their average for them.Easy! You just need 
// to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.
// arr -> never empty, no funny buz
// avg value sin arr -> rounding down int

function averageNum(arr) {
   // loop arr -> adding to sum
   // Calculate the sum of all the nums in the array
   // let sum = arr.reduce((a, c) => a + c, 0)
   let sum = arr.reduce((a, c) => a + c, 0)
   let average = sum / arr.length
   let roundAvg = Math.floor(average) 
   return roundAvg

   // // avg div sum / total num of nums in arr
   // // Calculate the average by dividing the sum by the number of marks
   // let average = sum / arr.length

   // // round down
   // // Round down to the nearest integer using Math.floor
   // let roundAvg = Math.floor(average)

   // return roundAvg
}

// Short version example:
// const getAverage = arr => Math.floor(arr.reduce((a, c) => a + c) / arr.length)

console.log(averageNum([2, 2, 2, 2]), 2)
console.log(averageNum([1, 2, 3, 4, 5, ]),3 )
console.log(averageNum([1, 1, 1, 1, 1, 1, 1, 2]), 1)
//-----------------------------------------------------------------------------------------------------------

// Sum Singles
// You will be given an array of numbers in which two numbers accur only once and the rest occur twice.
// Your task will be to return the sum of numbers that occur only once.

// Example: repeats ([4,5,7,5,4,8]) = 15 because only the numbers  7 and 8 occur only once, and thier sum is 15.
// Every other number occurs twice.

// repeats([4,5,7,5,4,8]), 15)
// repeats([9,10,19,13,19,13]), 19)


// filter the arr -> singles - indexOf(n) === lastIndexOf(n)
// sum the singles - reduce
// function returnSumOfNonReps(arr) {
//    return arr.reduce((a, n) => {
//       if (arr.indexOf(n) === arr.lastIndexOf(n)) {
//          return a + n;
//       }
//       return a;
//    }, 0);
// }

// console.log(returnSumOfNonReps([4, 5, 7, 5, 4, 8]), 15)
// console.log(returnSumOfNonReps([9, 10, 19, 13, 19, 13]), 19)

function returnSumOfNonReps(arr) {
   // return arr.filter( n => arr.indexOf(n) === arr.lastIndexOf(n)).reduce((a, c) => a + c, 0)
      return arr.filter( n => arr.indexOf(n) === arr.lastIndexOf(n)).reduce((a, c) => a + c, 0)
}
console.log(returnSumOfNonReps([4, 5, 7, 5, 4, 8]), 15)
console.log(returnSumOfNonReps([9, 10, 19, 13, 19, 13]), 19)
// ----------------------------------------------------------------------------------------------------------

// Return the number of unique arrays that can be formed by picking exactly one element from each subarray.
// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].
// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

// solve([[1,2],[4],[5,6]]),4)
// solve([[1,2],[4,4],[5,6,6]]),4)
// solve([[1,2],[3,4],[5,6]]),8)
// solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)

// Hint: You have an array full of arrays. Map through the parent array and make sure each sub array is a set aka no duplicate numbers. 
// Once each sub array contains no duplicates you can just reduce multiplying the length of each sub array together to get the total combinations 