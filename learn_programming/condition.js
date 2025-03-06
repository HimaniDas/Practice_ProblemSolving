

function condition(value){
    if(value<=60){ //The function checks if value is less than or equal to 60.
                  //If value is 60 or less, the condition is true, and the code inside the if block executes.
        console.log("you have failed");
    }
    else{
        console.log("you have passed");
    }
}
condition(80);

//If value is ≤ 60, print "you have failed".
//If value is between 61 and 100 (inclusive), print "you have passed".
//If value is greater than 100, print "you have entered an invalid value".

function condition(value){
    if(value<=60){ //If value is less than or equal to 60, this condition is true.
                //The function prints "you have failed" and exits the if-else block.
        console.log("you have failed");
    }
    else if(value>60 && value <=100) { //If value is greater than 60 and less than or equal to 100, this condition is true.
                                       //The function prints "you have passed".
        console.log("you have passed");
    }
    else{ //If neither of the previous conditions is met (i.e., value > 100), this block executes.
         //It prints "you have entered an invalid value".
        console.log("you have enter invalid value");
    }

}
condition(80);