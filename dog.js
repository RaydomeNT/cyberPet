class pet {
    constructor (name) {
    this.name = name;
    this.health = 100;
    this.hunger = 100;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
    
    drinks() {
        this.health += 10;
        console.log('slurp slurp slurp....burp')
        return this;
    }
    eats(){
        this.health += 5;
        this.hunger += 10;
        console.log(`${this.name} has been fed and his health is ${this.health}`);
        return this;
    }
    stats(){
        return console.log(`My health is ${this.health}, my hunger is ${this.hunger}`);
    }
    play(){
        this.health += 20;
        this.hunger -= 10;
        console.log(`You played fetch with ${this.name}, you threw a ball, he came back with human arm.... `)
    }
}
const otis = new pet();