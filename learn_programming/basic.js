//rule of fucntion writing

function himani(){
    console.log("my name is himani");
}
himani();

//write a new line

function first(){
    console.log("My name is Himani. \nI am from Bangladesh");
}
first();

//const variable

function first_one(){
    const var_one = "Student Of CSE.";
    const var_two = "Nationality is Bangladesh.";
    console.log(var_one);
    console.log(var_two);
}
first_one();

//shows together

function first_two(){
    const var_one = "Student Of CSE."; //for new line: const var_one = "Student of CSE.\n";
    const var_two = "Nationality is Bangladesh.";
    console.log(var_one + var_two); // for space: console.log(var_one+" "+var_two);
                                   // another one for new line: console.log(var_one+"\n"+var_two);
}
first_two();

//sum interger value

function first_three(){
    const var_one = 50;
    const var_two = 20;
    console.log(var_one + var_two);
}
first_three();

// string with number

function first_four() {
    const var_one = "50";
    const var_two = 20;
    console.log(var_one + var_two);
}
first_four();

// checking type

function first_five(){
    const var_one = "50";
    const var_two = 20;
    console.log(typeof var_one);
    console.log(typeof var_two);
}
first_five();

// sum,sub..etc with parameter, value pass from outside in variable

function first_six(var_one, var_two){
    console.log(var_one + var_two);
}
first_six(50,20);

//sum 

function first_seven(var_one, var_two){
    const sum = var_one + var_two;
    console.log(sum);
}
first_seven(60,40);

//function overload

function first_eight( var_one, var_two, var_three){ //function first_eight( var_one, var_two)
    const sum = var_one + var_two;
    console.log(sum); //console.log(sum); inside the function, meaning it directly printed the sum.
}
first_eight(20,20); //first_eight(20,20,20);

//function return, returns the sum instead of printing it.

function first_nine( var_one, var_two){
    const sum = var_one + var_two; 
    return sum;
}
console.log(first_nine(30,30)); // prints the return value.

//diifferent types of function

function sum( var_one, var_two){
    const sum = var_one + var_two;
    return sum;
}
function sub( var_one, var_two){
    const sub = var_one - var_two;
    return sub;
}
function multiply ( var_one, var_two){
    const mlt = var_one * var_two;
    return mlt;
}
function div ( var_one, var_two) {
    const div = var_one / var_two;
    return div;
}

console.log(sum(20,10));
console.log(sub(20,10));
console.log(multiply(20,10));
console.log(div(20,10));

//variables: array

function variables(){
    const data = ["hello","bangla","mine","himani","CSE",10,"testing",55.666,"automation","data ten"]
    console.log(data[4]);
}
variables();

//another method
function variables_one(){
    const data = ["hello","bangla","mine","himani","CSE",10,"testing",55.666,"automation","data ten", 
        {test_1:"one", test_2:"two"},{obj_3:"OBJ_ONE", obj_4:"OBJ_TWO"}]
    console.log(data[11].obj_3);
}
variables_one();

