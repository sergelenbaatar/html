//15
const a = "hello";



  
//16

          

//17

const numbers = [5, 10, 15, 20, 25, 30];

function findMax(arr) {
    if (arr.length === 0) 
        return undefined;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax(numbers));

//18

const numbers1 = [1, 2, 3, 4, 5];

function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumOfArray(numbers1));



//19
function hundred() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log("Fizz"); 
        if (i % 5 === 0)
            console.log("Buzz");
        if (i % 15 === 0)
            console.log("FizzBuzz");
        } else {
            console.log("normalDigit:"+" "+i) 
        }
    }
}
hundred();
//20
const y = [1,3,5];
const z = [2,4,6];

function mergeArrays() {
    
}

