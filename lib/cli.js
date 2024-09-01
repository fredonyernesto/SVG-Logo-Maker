const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createShape } = require('./shapes');

class CLI {
    constructor() {
        this.shape = {}; 
    }

    run() {
        return inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'name',
                    message: 'Please choose a shape',
                    choices: ['Triangle', 'Circle', 'Square'], 
                }
            ])
            .then(({ name }) => {
                this.shape.name = name; // Store the selected shape name
                return this.addShape(); // Proceed to add more properties
            })
            .then(() => {
                const filePath = join(__dirname, '..', 'output', `${this.shape.name}.svg`);
                return writeFile(filePath, createShape(this.shape)); 
            })
            .then(() => console.log(`Created ${this.shape.name}.svg`))
            .catch((err) => {
                console.error('Oops. Something went wrong.', err);
            });
    }

    addShape() {
        return inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'shapeColor',
                    message: 'Choose shape color',
                    choices: ['red', 'blue', 'green'],
                },
                {
                    type: 'input',
                    name: 'text',
                    message: 'Input your text',
                },
                {
                    type: 'list',
                    name: 'textColor',
                    message: 'Choose your text color',
                    choices: ['white', 'black', 'yellow'], 
                }
            ])
            .then(({ shapeColor, text, textColor }) => {
                Object.assign(this.shape, { shapeColor, text, textColor });
            });
    }
}

module.exports = CLI;
