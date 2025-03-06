//find the minimum value in the array
//[10,20,7,99,2,15,31]

function findMinimum(array){ //Defines a function named findMinimum that takes an array as a parameter.
                             //This function will search for and return the smallest value in the given array.
    
    let minValue = array[0];//The variable minValue is initialized with the first element of the array (array[0]).
                            //This assumes that the first element is the smallest value for now.

    for (let i = 1; i<array.length; i++){//This line starts a for loop that will iterate over the array. 
                                        // The loop starts at index 1 (the second element) because we've already assumed that the first element (array[0]) 
                                     // is the smallest. The loop continues as long as i is less than the length of the array (array.length).
        if (minValue <= array[i]){//Compares minValue (current smallest value) with array[i] (current element in the loop).
                                  //If minValue is smaller than or equal to array[i], it does not update minValue.
            
            minValue = minValue;
        }
        else{
            minValue = array[i];//If the condition minValue <= array[i] is false, it means array[i] is smaller than minValue.
                                //In this case, minValue is updated to array[i].
            
        }
    }
    return minValue;
}
console.log("minimum value: "+ findMinimum([10,20,7,99,2,15,3]));