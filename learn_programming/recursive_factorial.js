function factorial(n){
    if(n == 0 || n == 1){//If n is 0 or 1, return 1 immediately.
        //This prevents infinite recursion and stops the function.
        return 1;
    }
    return n* factorial(n-1);//Calls itself with n-1 until it reaches n == 0 or n == 1.
    //Multiplies n by the result of factorial(n-1).
    
}
console.log(`Factorial result: ${factorial(0)}`);//Calls factorial(0), which directly returns 1.
