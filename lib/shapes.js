const Circle = require('./circle.js')
const Triangle = require('./triangle.js')
const Square = require('./square.js')

function createShape(name, shape) {
    let shapeInstance;

    switch (name) {
        case 'Circle':
            shapeInstance = new Circle();
            break;

        case 'Triangle':
            shapeInstance = new Triangle();
            break;

        case 'Square':
            shapeInstance = new Square();
            break;

        default:
            throw new Error('Unknown shape');
    }

    const shapeSVG = shapeInstance.render(shape.shapeColor); 

    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
    ${shapeSVG}

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${shape.textColor}">${shape.text}</text>
 
    </svg>
    `;
}

module.exports = { createShape };
