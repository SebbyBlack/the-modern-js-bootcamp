// Functions with multiple arguments

// Create a function that adds both arguments
let add = function (a,b) {
    return a+b;
}

let result = add(2,4);

console.log(result);

// Default arguments if argument is not called

                // function values given a default value
let getScoreText = function (name = "Anon", score = 0) {
    console.log(name);
    console.log(score);
}

// Leave arguments undefined
getScoreText();
// Give arguments a value
getScoreText("Jay", 200);

// Challenge

// Use Default arguments as well as giving values to arguments
// Arguments : Bill (No default), Tip (Give default with decimal, example : 20 percent tip is .2)

let tipCalculator = function (bill, tip = .20) {
    return bill + (bill * tip);
}

var billTotal = tipCalculator(5,);
console.log(billTotal);

var billTotal = tipCalculator(10, .5);
console.log(billTotal)