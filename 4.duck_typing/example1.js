var complexType={ name:"das",id:1};
complexType={id:5};
complexType={age:18};
console.log(complexType);



class Bird{
    sound="bird sound";
}
class Dog{
    sound="dog sound";
}
class Fish{
    sound="fish sound";
    swim(){
        console.log("fish swim");
    }
}

const newbird =new Bird();

const fish=new Fish();

const dog= new Dog();

console.log(fish.sound, newbird.sound,dog.sound);


