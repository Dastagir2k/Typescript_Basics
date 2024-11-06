var item = { name: "das", id: 1 };
// This assignment causes an error in TypeScript because it doesn't match the type
// item = { id: 5 };  // Error: Property 'name' is missing in type '{ id: number }'
// This is correct because it matches the expected type.
item = { id: 5, name: "new name" };
console.log(item);
var NewBird = /** @class */ (function () {
    function NewBird() {
        this.sound = "bird sound";
    }
    return NewBird;
}());
var NewDog = /** @class */ (function () {
    function NewDog() {
        this.sound = "dog sound";
    }
    return NewDog;
}());
var NewFish = /** @class */ (function () {
    function NewFish() {
        this.sound = "fish sound";
    }
    NewFish.prototype.swim = function () {
        console.log("fish swim");
    };
    return NewFish;
}());
// Correct assignments in TypeScript
var newbird = new NewBird(); // Assigning a NewBird instance to newbird variable
var newdog = new NewDog(); // Assigning a NewDog instance to newdog variable
var newfish = new NewFish(); // Assigning a NewFish instance to newfish variable
// Printing values
console.log("Newbird sound:", newbird.sound); // Output: "Newbird sound: bird sound"
console.log("Newdog sound:", newdog.sound); // Output: "Newdog sound: dog sound"
console.log("Newfish sound:", newfish.sound); // Output: "Newfish sound: fish sound"
newfish.swim(); // Output: "fish swim"
