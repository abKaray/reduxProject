// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Instruments
import Styles from './styles.m.css';
import { delay, schema } from '../helpers';

// Components
import { LoginForm } from './LoginForm';

@hot(module)
export class LoginPage extends Component {

    render() {
        return (
            <section className = { Styles.loginPage }>
                <Formik
                    onSubmit = { (values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 3));
                            setSubmitting(false);
                        }, 1500);
                    } }
                    initialValues = {{ email: '', password: '' }}
                    render = { (props) => (
                        <LoginForm { ...props } />
                    ) }
                    validationSchema = { Yup.object().shape({
                        email: Yup.string()
                            .email()
                            .required('Required'),
                        password: Yup.string()
                            .required('Required'),
                    }) }
                />
            </section>
        );
    }
}
