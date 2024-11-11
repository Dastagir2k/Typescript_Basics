// Define a function 'concatStrings' that takes three string parameters: 'a', 'b', and an optional 'c'.
// In TypeScript, we specify the type of each parameter to enforce type checking, helping to avoid runtime errors.
// The third parameter 'c' is optional, indicated by the '?' symbol. 
// If 'c' is not provided when calling the function, TypeScript allows it to be undefined.
// 
// Functionality: 
// - When all three arguments ('a', 'b', and 'c') are provided, it will return their concatenation, e.g., concatStrings("a", "b", "c") returns "abc".
// - If only 'a' and 'b' are provided, as in concatStrings("a", "b"), 'c' will be 'undefined' in JavaScript. 
//   When you try to concatenate a string with 'undefined', it results in a string like "abundefined" because 'c' is not assigned a value.
// 
// Solution: To prevent this, we can set a default value for 'c' so that it behaves more predictably when 'c' is omitted.

const concatStrings = function(a: string, b: string, c: string = "") {
    return a + b + c;
}

console.log(concatStrings("a", "b", "c")); // Output: "abc"
console.log(concatStrings("a", "b"));      // Output: "ab" - now 'c' defaults to an empty string instead of 'undefined'
