const { Pet } = require('./pet');

class Dog extends Pet {
    constructor(petName, content) {
        super(petName, content);
        this.content = content;
    }

    play(){
        this.health += 20;
        this.hunger -= 10;
        console.log(`You played fetch with ${this.petName}, you threw a ball, they came back with a human arm.... `);
        return this;
    }
}
module.exports = { Dog };