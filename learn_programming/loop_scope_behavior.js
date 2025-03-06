// result: value of i:13 beacuse the loop ran until i = 13

function loop(){
    const testArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M"]
    let i;  // Declaring i at function scope
    for( i = 0; i<=testArray.length-1; i++){ //Since i was declared in the function scope, 
                                            // it is updated globally.
        console.log("current data: "+testArray[i]);
    }
    console.log("value of i: "+i);
}
loop();