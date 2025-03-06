//find the even number
findEven([0,1,2,30,7,99,2,15,3,0,400,22]);
function findEven(array){
    let even = [];
    for (let i = 0; i<array.length; i++){
        if(array[i] % 2 == 0){
            even.push(array[i]);
        }
    }
    //console.log(even);
    even.pop();
    console.log(even);
}