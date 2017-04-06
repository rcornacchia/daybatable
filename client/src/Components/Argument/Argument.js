import React, { Component } from 'react';
import './Argument.css';

class Argument extends Component {
    render() {
        const { position, arg } = this.props;
        return (
            <div className={`Argument ${position}`}>
                <p>{arg.votes} {arg.text}</p>
            </div>
        )
    }
}

export default Argument;
