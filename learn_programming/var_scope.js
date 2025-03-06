//var:
function loop(){
    const testArray =["A","B","C","D","E","F","G","H","I","J","K","L","M"]
    for(i = 0; i<1; i++){ 
        //console.log("current data: "+testArray[i]);
        var testData = "hello";
        console.log("value of testData: "+testData);
    }
    testData = "Test"; // without this line the result shows: hello in twice beacuse var works without loop
    console.log("value of testData: "+testData);
}
loop();