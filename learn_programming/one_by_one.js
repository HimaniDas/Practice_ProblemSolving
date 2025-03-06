//one by one print:
function loop(){
    const testArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M"]
    let i = 0;
    while(i < testArray.length){ // Loop while i is less than array length
        console.log(" data: "+ testArray[i]);
        i= i+2; // Increment i by 2 (skip every second element)
    }
}
loop();