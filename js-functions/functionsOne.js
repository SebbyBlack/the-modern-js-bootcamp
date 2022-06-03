// Parts of a function : Input, Code, Output


// Create the function
let greetUser = function () {
    console.log("Hello [insert name here]");
}

// Invoke the function
greetUser();



// Square number function

let squaredNum = function (x) {
    let sQ = x * x;

    console.log(sQ);
}

squaredNum(3);
squaredNum(5);


// Fahrenheit to Celsius conversion function

let fahToCel = function (fah) {
    let conversion = (fah - 32) * 5 / 9;
    console.log(conversion);
}

fahToCel(32);
fahToCel(43);