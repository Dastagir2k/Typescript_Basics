function greetUser(user:{Firstname:string,Lastname:string}){
    return `Hello ${user.Firstname} ${user.Lastname} `;
}

function logDetails(user:{Firstname:string,Lastname:string,age:number}){
    console.log(` User: ${user.Firstname} ${user.Lastname} , Age : ${user.age}`);
}
const user={
    Firstname:"Dastagir",
    Lastname:"Ahmed",
    age:20
}
console.log(greetUser(user));
logDetails(user)



// With using Interface



interface User{
    Firstname:string,
    Lastname:string,
    age:string
}

function GreetUser(user:User){
    return `Hello ${user.Firstname} ${user.Lastname} `;
}

function LogDetails(user:User){
    console.log(` User: ${user.Firstname} ${user.Lastname} , Age : ${user.age}`);
}
const user2={
    Firstname:"Dastagir",
    Lastname:"Ahmed",
    age:20
}
console.log(greetUser(user2));
logDetails(user2)
