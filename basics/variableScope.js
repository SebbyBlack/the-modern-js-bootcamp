// JS uses lexical scoping (static scope)
// 3 Types of scope : Block, Function, Global
// Global - all things defined outside of code blocks, accessible everywhere
// Block - all things defined within a block of code, not accessible outside of block
// Function - all things defined within a function, not accessible outside of function

// varOne is currently Global scope
let varOne = "varOne";

if (true) {
    console.log(varOne);
    
    // varTwo is currently Block scope
    let varTwo = "varTwo";
}

console.log(varTwo);