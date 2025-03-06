//reverse print M->A
function loop(){
    const testArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M"]
    let i = testArray.length-1;// Start from the last index (12)
    while(i>=0) { // Loop while i is greater than or equal to 0, 
                // The loop continues running as long as i is 12 down to 0. Stops when i = -1
        console.log("current data: "+testArray[i]);// Print the current element
        i--;// Decrement i
    }
}
loop();
