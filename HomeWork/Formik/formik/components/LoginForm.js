// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.m.css';

export class LoginForm extends Component {
    render() {
        const {
            handleChange,
            handleBlur,
            values,
            errors,
            touched,
            isValid,
            handleSubmit,
            isSubmitting,
        } = this.props;
        console.log(this.props);

        return (
            <>
                <form onSubmit = { handleSubmit }>
                    <input
                        name = 'email'
                        onBlur = { handleBlur }
                        onChange = { handleChange }
                        type = 'email'
                        value = { values.email }
                        disabled = { isSubmitting }
                        className = {
                            errors.email && touched.email ? Styles.invalidInput : ''
                        }
                    />
                    <input
                        name = 'password'
                        onBlur = { handleBlur }
                        onChange = { handleChange }
                        type = 'password'
                        value = { values.password }
                        disabled = { isSubmitting }
                        className = {
                            errors.password && touched.password ? Styles.invalidInput : ''
                        }
                    />
                    <input
                        name = 'checkbox'
                        type = 'checkbox'
                    />
                    <label>Запомнить меня</label>
                    <button
                        className = { !isValid || isSubmitting ? Styles.disabled : '' }
                        disabled = { isSubmitting || !isValid }
                        type = 'submit'> { isSubmitting ? '...Войти' : 'Войти'}
                    </button>
                </form>
            </>
        );
    }
}
