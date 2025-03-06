//13<=13: testArray.length - 1 = 13 - 1 = 12, so the loop runs as long as i ≤ 12.
//After the 13th iteration, i = 13, which fails the condition (i <= 12), so the loop stops.
function loop(){
    const testArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M"]
    for(let i = 0; i<=testArray.length-1; i++){
        console.log("data: "+testArray[i]);
    }
}
loop();