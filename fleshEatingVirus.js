const { Pet } = require('./pet');

class FleshEatingVirus extends Pet {
    constructor(name, content) {
        super(name, content);
        this.content = content;
    }

    play(){
        this.health += 20;
        this.hunger -= 10;
        console.log(`You played with ${this.name} by releasing them into a highly populated area, you watched with delight in your hazmat suit`)
    }
}
