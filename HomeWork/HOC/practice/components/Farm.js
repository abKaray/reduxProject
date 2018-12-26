// Core
import React from 'react';

// Components
import { Container, Heading, Button, Message } from '../styled';
import withState from './withState';

const options = {
    stateName: 'apples',
    initialValue: 2,
    clickHandler: '_yieldApples',
};

export default withState(options)((props) => {
    // 10 должно стать динамическим
    // props._yieldApples должно стать динамическим
    const applesJSX = Array(props[options.stateName]).fill('🍎');

    return (
        <Container>
            <Heading>🏡 Ферма 🕊</Heading>
            <div>
                <Message>Урожай:</Message>
                <Message>{applesJSX}</Message>
            </div>
            <Button onClick = { props[options.clickHandler] }>Собрать урожай 👨🏼‍🌾</Button>
        </Container>
    );
});
