class Pet {
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
        console.log(`${this.name} has been fed.`);
        return this;
    }
    stats(){
        return console.table({
            name: this.name,
            health: this.health,
            hunger: this.hunger,
        });
    }
}