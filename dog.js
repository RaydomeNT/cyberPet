const { Pet } = require('./pet');

class Dog extends Pet {
    constructor(petName, content) {
        super(petName, content);
        this.content = content;
    }

    play(){
        this.mood += 10;
        this.health += 20;
        this.hunger -= 20;
        this.hydration -= 20;
        console.log(`You played fetch with ${this.petName}, you threw a ball, they came back with a human arm.... `);
        return this;
    }
}
module.exports = { Dog };