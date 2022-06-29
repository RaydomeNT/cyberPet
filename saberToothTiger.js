const { Pet } = require('./pet');

class SaberToothTiger extends Pet {
    constructor(name, content) {
        super(name, content);
        this.content = content;
    }

    play(){
        this.health += 20;
        this.hunger -= 10;
        console.log
        (`You played with ${this.name}, you wanted them to chase the laser pointer, they were too smart for this, so used you as a chew toy instead.`)
    }
}