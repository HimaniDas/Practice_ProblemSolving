//4! = 4*3*2*1=24
//5! = 5*4*3*2*1=120
//0! = 1
//1! = 1

//factorial number
function factorial(n){
    let fac = 1;//Initializes fac to 1, because the factorial of any number n is calculated by multiplying numbers together and 1 is the multiplicative identity.

    for(i=2; i<=n; i++){//Starts at 2 (since multiplying by 1 doesn't change anything).
        //Runs until i is equal to n (i <= n ensures n is included).
        //Increments i by 1 after each loop iteration.

        fac = fac*i;//Multiplies the current fac value by i in each iteration.
        //Stores the result back in fac.
        
        console.log(fac);
    }
    console.log(`factorial result: ${fac}`);
}
factorial(5);