//without condition for in loop
//read data in array
//Since data represents the index (not the actual element), we use testArray[data] to get the value.
function loop(){
    const testArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M"]
    for (let data in testArray){ // Using for...in loop to iterate over testArray indices
        console.log("current data: "+ testArray[data]);
    }
}
loop();

//print index
function loop(){
    const testArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M"];

    for (let index in testArray){ // Using for...in loop to iterate over testArray indices
        console.log(`current data for index ${index} : ${testArray[index]}`);
    }
}
loop();