// Core
import React, { Component } from 'react';

// Components
import { Tracker } from './Tracker';
import mouse from '../assets/mouse.png';
import cat from '../assets/cat.png';

export class Cat extends Component {
    render() {
        const positionCat = {
            top:  this.props.coordY - 50,
            left: this.props.coordX - 150,
        };

        return (
            <div
                className = 'cat-wrapper'
                style = {{top: positionCat.top, left: positionCat.left}}>
                <img
                    alt = 'cat'
                    src = { cat }
                />
            </div>
        );
    }
}

export class Mouse extends Component {
    render() {
        const positionCat = {
            top:  this.props.coordY - 50,
            left: this.props.coordX + 50,
        };

        return (
            <div
                className = 'cat-wrapper'
                style = {{top: positionCat.top, left: positionCat.left}}>
                <img
                    alt = 'mouse'
                    src = { mouse }
                />
            </div>
        );
    }
}

export class Room extends Component {
    render() {
        return (
            <div className = 'room'>
                <h1>Поиграем в кошки-мышки!</h1>
                <Tracker
                    render = { (render) => (
                        <div>
                            <h2>координаты по x: {render.x} {render.y}</h2>
                            <Cat
                                coordX = { render.x }
                                coordY = { render.y }
                            />
                            <Mouse
                                coordX = { render.x }
                                coordY = { render.y }
                            />
                        </div>
                    ) }
                />
            </div>
        );
    }
}
