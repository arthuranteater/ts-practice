var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal.prototype.speak = function () {
        console.log("I am a " + this.name + " and I am " + this.age + " years old");
    };
    return Animal;
}());
var lion = new Animal("Simba", 10);
lion.speak();
var age = 10;
var time = 2;
var words = "My age is " + age;
console.log(age + time);
