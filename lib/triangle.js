const Component = require('./componet');

class Triangle extends Component {
    render(shapeColor) {
        return `
        <polygon points="150,10 290,190 10,190" fill="${shapeColor}" />
        `;
    }
}

module.exports = Triangle;
