const Component = require('./componet')

class Square extends Component {
    render(shapeColor) {
        return `
        <rect x="70" y="40" width="160" height="160" fill="${shapeColor}" />
        `;
    }
}

module.exports = Square;
