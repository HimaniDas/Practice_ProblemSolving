//fine fibonacci number 
//0 1 1 2 3 5 8 21 34 55

function fibonacci(n){
    let fib = [0,1];//This initializes an array fib with the first two Fibonacci numbers: 0 and 1.

    for (let i = 2; i<n; i++){//This starts a for loop with i initialized to 2 (since the first two numbers are already in the array).
        //The loop runs until i is equal to n, meaning it will generate n Fibonacci numbers.
        //i++ increases the value of i by 1 after each iteration.
        
        fib.push(fib [i-1] + fib [i-2]);//This calculates the next Fibonacci number by adding the two previous numbers: fib[i-1] (the last element) and fib[i-2] (the second last element).
        //The result is pushed into the fib array.
    }
    console.log(fib);
}
fibonacci(9);