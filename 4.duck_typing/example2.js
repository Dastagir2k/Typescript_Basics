var item = { name: "das", id: 1 };
// This assignment causes an error in TypeScript because it doesn't match the type
// item = { id: 5 };  // Error: Property 'name' is missing in type '{ id: number }'
// This is correct because it matches the expected type.
item = { id: 5, name: "new name" };
console.log(item);
// class NewBird {
//     sound = "bird sound";
// }
// class NewDog {
//     sound = "dog sound";
// }
// class NewFish {
//     sound = "fish sound";
//     swim() {
//         console.log("fish swim");
//     }
// }
// // Correct assignments in TypeScript
// let bird: NewBird = new NewBird();  // Creating an instance of NewBird and assigning it to 'newbird'
// let newdog: NewDog = new NewDog();        // Creating an instance of NewDog and assigning it to 'newdog'
// let newfish: NewFish = new NewFish();      // Creating an instance of NewFish and assigning it to 'newfish'
// // Printing values
// console.log("Newbird sound:", bird.sound);  // Output: "Newbird sound: bird sound"
// console.log("Newdog sound:", newdog.sound);  // Output: "Newdog sound: dog sound"
// console.log("Newfish sound:", newfish.sound);  // Output: "Newfish sound: fish sound"
// newfish.swim();                                    // Output: "fish swim"
