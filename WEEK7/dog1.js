class Dog {
    constructor(name,G) {
        this.names = name;

    }

    introduct() {
        console.log("This is "+ this.names + " !");

    }

    static bark() {
        console.log("WooF!!")
    }

}

const myDog = new Dog("BIGBOY");
myDog.introduct();

Dog.bark()
Dog.bark()