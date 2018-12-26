// Core
import React, { useState, useRef } from 'react';

// Components
import Checkbox from '../../theme/assets/Checkbox';
import Star from '../../theme/assets/Star';
import Edit from '../../theme/assets/Edit';
import Remove from '../../theme/assets/Remove';

// Instruments
import Styles from './styles.m.css';

const Task = ({ message, id, removeTask, updateTask, completed, favorite }) => {
    const [isDisable, setDisable] = useState(true);
    const [textInp, setTextInp] = useState(message);

    const inputEl = useRef(null);

    const _changeDisable = () => {
        setDisable(!isDisable);
        inputEl.current.disabled = !isDisable;
    };

    const _completedClick = () => {
        const completedTask = { message, id, completed: !completed, favorite };

        updateTask(completedTask);
    };

    const _favoriteClick = () => {
        const completedTask = { message, id, completed, favorite: !favorite };

        updateTask(completedTask);
    };

    const _editClick =  () => {
        _changeDisable();
        if (isDisable) {
            inputEl.current.focus();
        }
        if (textInp !== message) {
            const completedTask = { message: textInp, id, completed, favorite };

            updateTask(completedTask);
        }
    };

    const _cancelEdit = () => {
        setTextInp(message);
        setDisable(true);
        inputEl.current.disabled = true;
    }

    const _keyClick = (e) => {
        const { key: eventKey } = e;

        if (eventKey === 'Enter') {
            const completedTask = { message: textInp, id, completed, favorite };

            updateTask(completedTask);
        }

        if (eventKey === 'Escape') {
            _cancelEdit();
        }
    };

    const _removeTask = async () => {
        await removeTask(id);
    };

    return (
        <li className = { Styles.task } data-id = { id }>
            <div className = { Styles.content }>
                <Checkbox
                    checked = { completed }
                    className = { Styles.toggleTaskCompletedState }
                    color1 = '#3B8EF3'
                    color2 = '#fff'
                    onClick = { _completedClick }
                />
                <input
                    className = { Styles.input }
                    disabled = { isDisable }
                    maxLength = '50'
                    ref = { inputEl }
                    type = 'text'
                    value = { textInp }
                    onChange = { (e) => setTextInp(e.target.value) }
                    onKeyDown = { _keyClick }
                />
            </div>
            <div className = { Styles.actions }>
                <Star
                    inlineBlock
                    checked = { favorite }
                    className = { Styles.toggleTaskFavoriteState }
                    color1 = '#3B8EF3'
                    color2 = '#000'
                    onClick = { _favoriteClick }
                />
                <Edit
                    inlineBlock
                    className = { Styles.toggleTaskFavoriteState }
                    color1 = '#3B8EF3'
                    color2 = '#000'
                    onClick = { _editClick }
                />
                <Remove
                    inlineBlock
                    className = { Styles.toggleTaskFavoriteState }
                    color1 = '#3B8EF3'
                    color2 = '#000'
                    onClick = { _removeTask }
                />
            </div>
        </li>
    );
};

export default Task;
