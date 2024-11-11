function greetUser(user) {
    return "Hello ".concat(user.Firstname, " ").concat(user.Lastname, " ");
}
function logDetails(user) {
    console.log(" User: ".concat(user.Firstname, " ").concat(user.Lastname, " , Age : ").concat(user.age));
}
var user = {
    Firstname: "Dastagir",
    Lastname: "Ahmed",
    age: 20
};
console.log(greetUser(user));
logDetails(user);
function GreetUser(user) {
    return "Hello ".concat(user.Firstname, " ").concat(user.Lastname, " ");
}
function LogDetails(user) {
    console.log(" User: ".concat(user.Firstname, " ").concat(user.Lastname, " , Age : ").concat(user.age));
}
var user2 = {
    Firstname: "Dastagir",
    Lastname: "Ahmed",
    age: 20
};
console.log(greetUser(user2));
logDetails(user2);
