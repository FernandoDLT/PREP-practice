// PREP

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

// function fizzBuzz(num){
  //loop 1 to num
//   for(let i = 1; i<=num; i++){
    //conditional 
    //if num%3 && num%5 --- 0 -> fizzbuzz
    //if num%3 -> 0 fizz
    //if num%5 -> 0 buzz
    //log num
//     if(i % 3 === 0 && i % 5 === 0){
//       console.log('fizzbuzz')
//     }else if(i % 3 === 0){
//       console.log('fizz')
//     }else if(i % 5 === 0){
//       console.log('buzz')
//     }else{
//       console.log(i)
//     }
//   }
// }

function fizzBuzz(num) {
   for (let i = 1; i <= num; i++) {
      if (i % 3 === 0 & i % 5 === 0) {
         console.log("FizzBuzz")
      } else if (i % 3 === 0) {
         console.log("Fizz") 
      } else if (i % 5 === 0) {
         console.log("Buzz")
      } else {
         console.log(i)
      }
   }
}

fizzBuzz(5) //1,2,fizz,4,buzz
fizzBuzz(9) //1,2,fizz,4,buzz,fizz,7,8,fizz
fizzBuzz(15) //1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz


// arr -> never empty, no tricky buz
// avg value sin arr -> rounding down int

function averageNum(nbrz) {
   // loop arr -> adding to sum
   // Calculate the sum of all the nums in the array
   const sum = nbrz.reduce((acc, c) => acc + c, 0) 

   // avg div sum / total num of nums in arr
   // Calculate the average by dividing the sum by the number of marks
   let average = sum / nbrz.length

   // round down
   // Round down to the nearest integer using Math.floor
   let roundAvg = Math.floor(average)

   return roundAvg
}

console.log(averageNum([2, 2, 2, 2]), 2)
console.log(averageNum([1, 2, 3, 4, 5, ]),3 )
console.log(averageNum([1, 1, 1, 1, 1, 1, 1, 2]),1 )


// Short version example:
const getAverage = arr => Math.floor(arr.reduce((a, c) => a + c) / arr.length)

console.log(averageNum([2, 2, 2, 2]), 2)
console.log(averageNum([1, 2, 3, 4, 5, ]),3 )
console.log(averageNum([1, 1, 1, 1, 1, 1, 1, 2]),1 )