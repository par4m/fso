
class Animal{
    constructor(name, legCount, speaks) {
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    speak() {
        console.log(this.name + " makes a noise " + this.speaks);
    }
    static mymethod() {

    }
}


let dog = new Animal("arav", 4 , "bhow bhow");
let cat = new Animal("arnav", 2 , "meow ");
dog.speak()
