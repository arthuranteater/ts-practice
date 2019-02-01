class Animal {

    constructor(public name: string, public age: number, public health?: boolean, public stuff?: any) {
        // this.name = name
        // this.age = age
    }

    speak() {
        console.log(`I am a ${this.name} and I am ${this.age} years old`)
    }
    static talk() {
        console.log("The animals are all here")
    }
    //generic type
    data<T>(stuff: T) {
        console.log(`I've been passed this value: ${stuff}`)

    }
}
let lion = new Animal("Simba", 10);
let mouse = new Animal("Mouse", 22, true, "whateever")
lion.speak();

lion.data<boolean>(true)

let age: number = 10
let time: number = 2

let words = `My age is ${age}`

console.log(age + time)