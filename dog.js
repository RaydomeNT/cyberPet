const { Pet } = require('./pet');

class Dog extends Pet {
    constructor(name) {
        // super(name, content);
        // this.content = content;
    }

    play(){
        this.health += 20;
        this.hunger -= 10;
        console.log(`You played fetch with ${this.name}, you threw a ball, they came back with a human arm.... `);
        return this;
    }
}
module.exports = { Dog };