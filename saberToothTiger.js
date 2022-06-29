const { Pet } = require('./pet');

class SaberToothTiger extends Pet {
    constructor(name, content) {
        super(name, content);
        this.content = content;
    }

    play(){
        this.mood += 10;
        this.health += 20;
        this.hunger -= 20;
        this.hydration -= 20;
        console.log
        (`You played with ${this.petName}, you wanted them to chase the laser pointer, they were too smart for this, so used you as a chew toy instead.`);
        return this;
    }
}
module.exports = { SaberToothTiger };
