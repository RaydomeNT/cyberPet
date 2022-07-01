class Pet {
    constructor (petName) {
    this.petName = petName;
    this.health = 100;
    this.hunger = 100;
    this.hydration = 100;
    this.mood = 100; 
    }
    
    quit(){
        //process exit to end the game
        console.log(`You have abandoned ${this.petName}, you are a bad owner!`);
        process.exit();
    }
    stats(){
        //table of contents which is returned after each interaction
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
