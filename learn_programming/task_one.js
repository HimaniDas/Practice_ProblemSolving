// find maximum and minimum number in the same array
findMaxAndMin([2, 20, 7, 99, 2, 15, 3, 0, 400, 22]);
function findMaxAndMin(array) {
    // Initialize max and min with the first element of the array
    let max = array[0];
    let min = array[0];
    // Loop through the array starting from the second element
    for (let i = 1; i < array.length; i++) {
        // Update max if the current element is greater
        if (array[i] > max) {
            max = array[i];
        }
        // Update min if the current element is smaller
        if (array[i] < min) {
            min = array[i];
        }
    }
    console.log("Maximum value: " + max);
    console.log("Minimum value: " + min);
    return {max, min};
}

