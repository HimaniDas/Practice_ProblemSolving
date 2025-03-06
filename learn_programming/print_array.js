//13<=13: print till M then current data:  undefine because index 12 is M but testArray length 13
//so data doesn't not find anything when i = 13
//testArray.length = 13, so i <= 13 means it will run up to i = 13.
//But the highest valid index in the array is 12 (since arrays are zero-based).
//When i = 13, testArray[13] does not exist, so it prints undefined.
function loop(){
    const testArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M"]
    for(let i = 0; i<=testArray.length; i++){
        console.log("current data: "+testArray[i]);
    }
}
loop();

