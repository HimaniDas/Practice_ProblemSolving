// find even and odd number from same array
findEvenOdd([0, 1, 2, 30, 7, 99, 2, 15, 3, 0, 400, 22]);

function findEvenOdd(array) {
    let even = [];
    let odd = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            even.push(array[i]); // Add even numbers to the even array
        } else {
            odd.push(array[i]); // Add odd numbers to the odd array
        }
    }

    even.pop(); // Remove the last even number
    odd.pop();  // Remove the last odd number

    console.log("Even numbers:", even);
    console.log("Odd numbers:", odd);
}