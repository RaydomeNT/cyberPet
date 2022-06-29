class Pet {
    constructor (petName) {
    this.petName = petName;
    this.health = 100;
    this.hunger = 100;
    }

    greet() {
        console.log(`Hello, my name is ${this.petName}.`);
    }
    
    drinks() {
        this.health += 10;
        console.log('slurp slurp slurp....burp')
        return this;
    }
    eats(){
        this.health += 5;
        this.hunger += 10;
        console.log(`${this.petName} has been fed.`);
        return this;
    }
    quit(){
        console.log(`You have abandoned ${this.petName}, you are a bad owner`)
    }
    stats(){
        return console.table({
            health: this.health,
            hunger: this.hunger,
        });
    }
}
module.exports = { Pet };
