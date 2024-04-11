//  Write a recursive function to calculate the nth Fibonacci number.
function fibonacciRecursive(n) {
    if (n <= 0) {
        return "Invalid input: n should be a positive integer";
    } else if (n === 1 || n === 2) {
        return n - 1;
    } else {
        return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
    }
}

const number = 8;
console.log(fibonacciRecursive(number)); 


// Write a recursive function to calculate the factorial of a number.
function factorialRecursive(n) {
    if(n < 2) return 1;
    return n * factorialRecursive(n-1)
}
console.log(factorialRecursive(5));


//  Write a recursive function to find the sum of digits of a number.
function SumofDigitRecursive(n) {
    if(n<10) return n;
    return n%10 + SumofDigitRecursive(Math.floor(n/10));
}

console.log(SumofDigitRecursive(123));


// Write a recursive function to reverse a string
function reversestrRecursive(str) {
    if (str.length <= 1) {
        return str;
    } else {
        return reversestrRecursive(str.slice(1)) + str[0];
    }
}

console.log(reversestrRecursive('javascript'));


// Write a recursive function to calculate the power of a number.
function powerRecursive(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * powerRecursive(base, exponent - 1);
    }
}

const base = 2;
const exponent = 5;
console.log(powerRecursive(base, exponent));