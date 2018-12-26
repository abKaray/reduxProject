// Core
import React, {Component} from 'react';
import {Tracker} from './Tracker';


export class Cat extends Component {

    render() {
        const positionCat = {
            top:  this.props.coordY,
            left: this.props.coordX,
        };

        return (
            <div >
                <img
                    alt = 'cat'
                    src = '../assets/cat.png'
                />
            </div>
        );
    }
}


export class Content extends Component {
    render() {
        return (
            <Tracker>
                {(tracker) => (
                    <div>
                        <h1>координаты по x: {tracker.x} {tracker.y}</h1>
                        <Cat
                            coordX = { tracker.x }
                            coordY = { tracker.y }
                        />
                    </div>
                )}
            </Tracker>
        );
    }
}
