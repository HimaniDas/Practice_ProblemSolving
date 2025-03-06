//merge the problem three

findValue([2,20,7,99,2,15,3,0,400,22],"max");
findValue([2,20,7,99,2,15,3,0,400,22],"min");

function findValue(array, type){ //array → an array of numbers.
                                // type → a string that determines whether to find "max" or "min".
                     
     let value = array[0];//The variable value is initialized with the first element of the array (array[0]).
    
    for(let i = 1; i<array.length; i++){ //A for loop starts at index 1 and iterates through the rest of the array.
                                         //It checks whether each element is larger (for "max") or smaller (for "min").
       
         if(type == "max"){//Inside the loop, the function checks whether the type parameter is "max". 
                         // If it is, the function will look for the maximum value in the array.
            
            if(value >= array[i]){//If the type is "max", the function compares value with the current element (array[i]):
                                 //If value is greater than or equal to array[i], it means value is still the largest value encountered so far, so it remains unchanged.
                                 //If value is less than array[i], it means the current element is larger, so value is updated to array[i].
                value = value;
            }
            else{
                value = array[i];
            }
        }else{//If the type is not "max" (i.e., it is "min"), the function looks for the minimum value in the array:
            //If value is less than or equal to array[i], it means value is still the smallest value encountered so far, so it remains unchanged.
            //If value is greater than array[i], it means the current element is smaller, so value is updated to array[i].
            if(value <= array[i]){
                value = value;
            } else {
                value = array[i];
            }
        }
    }
console.log("value: "+ value);

return value;//The function returns the value stored in value, which is either the maximum or minimum value in the array, depending on the type parameter.
}
