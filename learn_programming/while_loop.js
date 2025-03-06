//while loop:
function loop(){
    const testArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M"]
    let i = 0; // Initialize counter variable
    while(i<testArray.length) { // Loop while i is less than array length
        console.log("current data: "+testArray[i]);// Print the current element
        i++;  // Increment i
    }
}
loop();