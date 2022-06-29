const inquirer = require('inquirer');
const {cthulu} = require('./cthulu')
const {cannibal} = require('./cannibal')

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
                name: 'Cthulu',
                value: 'cthulu',
            },
            {
                key: 'c',
                name: 'Cannibal',
                value: 'cannibal',
            },
        ]
    })
};
start();