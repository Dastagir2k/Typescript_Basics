var test = "This is string";
test = 1; // error: Type 'number' is not assignable to type 'string'.
test = function (a, b) {
    return a + b;
};
