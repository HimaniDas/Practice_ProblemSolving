// to avoid write in details using for loop: 13<13
//i = 0 (initialization): The loop starts at index 0 (first element "A").
//i < testArray.length (condition): The loop runs until i is less than 13.
//i++ (increment): After each loop iteration, i increases by 1.

function loop(){
    const testArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M"]
    //let = i;
    for(let i = 0; i<testArray.length; i++){
        console.log("current data: "+testArray[i]);
    }
}
loop();