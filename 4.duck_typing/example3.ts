var item = { name: "das", id: 1 };

// This assignment causes an error in TypeScript because it doesn't match the type
// item = { id: 5 };  // Error: Property 'name' is missing in type '{ id: number }'

// This is correct because it matches the expected type.
item = { id: 5, name: "new name" };
console.log(item);

class NewBird {
    sound = "bird sound";
}

class NewDog {
    sound = "dog sound";
}

class NewFish {
    sound = "fish sound";
    swim() {
        console.log("fish swim");
    }
}

// Correct assignments in TypeScript
let newbird: NewBird = new NewBird();  // Assigning a NewBird instance to newbird variable
let newdog: NewDog = new NewDog();     // Assigning a NewDog instance to newdog variable
let newfish: NewFish = new NewFish();  // Assigning a NewFish instance to newfish variable

// Printing values
console.log("Newbird sound:", newbird.sound);  // Output: "Newbird sound: bird sound"
console.log("Newdog sound:", newdog.sound);    // Output: "Newdog sound: dog sound"
console.log("Newfish sound:", newfish.sound);  // Output: "Newfish sound: fish sound"
newfish.swim();                                // Output: "fish swim"
