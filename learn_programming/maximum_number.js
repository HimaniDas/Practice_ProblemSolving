//find the maximum value in the array

function findMaximum(array){
    let maxValue = array[0];
    for (let i = 1; i<array.length; i++){
        if (maxValue >= array[i]){//This checks whether maxValue is greater than or equal to the current element (array[i]).
                                  //If this condition is true, it means maxValue is already the largest, so no change is needed.
            maxValue = maxValue;
        }
        else{
            maxValue = array[i];
        }
    }
    return maxValue;
}
console.log("maximum value: "+ findMaximum([10,20,7,99,2,15,3]));