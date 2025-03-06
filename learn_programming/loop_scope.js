//result: value of i: test beacuse scope specific
//Since i inside the loop is block-scoped, a new i is declared outside the loop.
//The new i is assigned "test", and it prints

function loop(){
    const testArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M"]
    for(let i = 0; i<=testArray.length-1; i++){
        console.log("current data: "+testArray[i]);
    }
    let i = "test"; // Re-declaring i inside the same function scope
    console.log("value of i: "+i);
}
loop();

