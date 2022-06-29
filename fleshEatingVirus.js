const { Pet } = require('./pet');

class FleshEatingVirus extends Pet {
    constructor(name, content) {
        super(name, content);
        this.content = content;
    }

    play(){
        this.mood += 10;
        this.health += 20;
        this.hunger -= 20;
        this.hydration -= 20;
        console.log(`You played with ${this.petName} by releasing them into a highly populated area, you watched with delight in your hazmat suit`);
        return this;
    }
}
module.exports = { FleshEatingVirus };