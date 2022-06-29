class Pet {
    constructor (petName) {
    this.petName = petName;
    this.health = 50;
    this.hunger = 50;
    this.hydration = 50;
    this.mood = 50;
    }

    greet() {
        this.mood += 5;
        this.hydration -= 5;
        console.log(`Hello, my name is ${this.petName}.`);
    }
    
    drinks() {
        this.health += 10;
        this.hydration += 20;
        this.mood += 10;
        console.log('slurp slurp slurp....burp')
        return this;
    }
    eats(){
        this.mood += 10;
        this.health += 10;
        this.hunger += 20;
        console.log(`${this.petName} has been fed.`);
        return this;
    }
    quit(){
        console.log(`You have abandoned ${this.petName}, you are a bad owner`)
    }
    stats(){
        return console.table({
            name: this.petName,
            health: this.health,
            hunger: this.hunger,
            hydration: this.hydration,
            mood: this.mood,
        });
    }
}
module.exports = { Pet };
