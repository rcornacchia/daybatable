import React, { Component } from 'react';
import './Arguments.css';
import Argument from '../../Components/Argument/Argument';

class Arguments extends Component {
    render() {
        const { position, args } = this.props;
        return (
            <div className='Arguments'>
                <div className="position">
                    <h2>{position}</h2>
                </div>
                {!!args && args.map((arg, i) => {
                    return <Argument key={`forArg_${i}`} arg={arg} position={position}></Argument>
                })}
            </div>
        )
    }
}

export default Arguments;