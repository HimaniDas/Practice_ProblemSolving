// const: scope specific
function loop(){
    const testArray =["A","B","C","D","E","F","G","H","I","J","K","L","M"]
    for(i = 0; i<1; i++){ 
        console.log("current data: "+testArray[i]);
        const testData = "hello";
        console.log("value of testData: "+testData);
    }
    testData = "Test";// it also prints, without this line the last console doesn't work and shows undefine beacuse it only works with decalaration and scope
    console.log("value of testData: "+testData);
}
loop();