//find maximum and minimum number

function findMinimum(array){
    let minValue = array[0];
    for (let i = 1; i<array.length; i++){
        if (minValue <= array[i]){
            minValue = minValue;
        }
        else{
            minValue = array[i];
        }
    }
    return minValue;
}

function findMaximum(array){
    let maxValue = array[0];
    for (let i = 1; i<array.length; i++){
        if (maxValue >= array[i]){
            maxValue = maxValue;
        }
        else{
            maxValue = array[i];
        }
    }
    return maxValue;
}

function findValue(array, type){
    let value;
    if(type == "max"){
        value = findMaximum(array);
        console.log(`Maximum value is: ${value}`);
    }
    else if(type == "min"){
        value = findMinimum(array);
        console.log(`Minimum value is: ${value}`);
    }
    else {
        console.log(`value identifer is missing`);
    }
}
findValue([2,20,7,99,2,15,3,0,400,22],"max");
findValue([2,20,7,99,2,15,3,0,400,22],"min");