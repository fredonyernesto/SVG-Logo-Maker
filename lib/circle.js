const Component = require('./componet')

class Circle extends Component {
    render(shapeColor) {
        return `
        <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
        `;
    }
}

module.exports = Circle;
