import React from 'react';

function withState(options){
    return function(BaseComponent){
        return class extends React.Component{

            constructor(props) {
                super(props);
                const {stateName, initialValue } = options;

                this.state = {};
                this.state[stateName] = initialValue;

                this[options.clickHandler] = this._increment;
            }

            _increment = () => {
                const { stateName } = options;

                this.setState((state) => {
                    const newState = {};
                    newState[stateName] = state[stateName] + 1;

                    return newState;
                });
            };

            render(){
                return <BaseComponent {...this.state} _yieldApples={this._yieldApples}/>
            }
        }
    }
}

export default withState;
