// Core
import React, { Component } from 'react';

export class Tracker extends Component {
    state = {
        x: 0,
        y: 0,
    };

    _handleMouseMove = (event) => {
        this.setState({
            x: event.clientX,
            y: event.clientY,
        });
    };

    render() {
        const { render, children, component } = this.props;

        let result = null;
        if (children) {
            result = children(this.state);
        } else if (render) {
            result = render(this.state);
        } else if (component) {
            result = props.component;
        }

        return (
            <div
                className = 'tracker'
                onMouseMove = { this._handleMouseMove }>
                {result}
            </div>
        );
    }
}
