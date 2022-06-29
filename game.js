const inquirer = require('inquirer'); 
const { Pet } = require('./pet')
const { Dog } = require('./dog')
const { FleshEatingVirus } = require('./fleshEatingVirus')
const { SaberToothTiger } = require('./saberToothTiger')

let myPet;

async function start() {
    const {typeOfPet} = await inquirer.prompt({
        type: 'list',
        name: 'typeOfPet',
        message:
        'What type of pet would you like? Please choose from the following:',
        choices: [
            {
                key: 'a',
                name: 'Dog',
                value: 'dog',
            },
            {
                key: 'b',
                name: 'Flesh eating virus',
                value: 'fleshEatingVirus',
            },
            {
                key: 'c',
                name: 'Saber tooth tiger',
                value: 'saberToothTiger',
            },
        ]
    })

const { petName } = await inquirer.prompt({
    type: 'input',
    name: 'petName',
    message: 'What is your pet called?',
});

if (typeOfPet === 'dog') myPet = new Dog(petName);
else if (typeOfPet === 'saberToothTiger') myPet = new SaberToothTiger(petName);
else if (typeOfPet === 'fleshEatingVirus') myPet = new FleshEatingVirus(petName);

userChoice();
}

start();