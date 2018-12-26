// Core
import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// Components
import Task from '../Task';
import Spinner from '../Spinner';

// Instruments
import Styles from './styles.m.css';
import { sortTasksByGroup } from '../../instruments';
// import { api } from '../../REST';
import Checkbox from '../../theme/assets/Checkbox';

// Actions
import { fetchTaskAction } from '../../bus/Scheduler/actions';

const Schedular = (props) => {
    const [todo, setTodo] = useState([]);
    const [textTodo, setText] = useState('');
    const [filter, setFilter] = useState('');
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        // try {
        //     const { tasks } = props;
        //     setSpinner(true);
        //     console.log('→ tasks', tasks);
            // props.fetchTaskAction();

        // props.fetchTaskAction();

            // setTodo(props.tasks);
        // } catch (message) {
        //     console.log('→ message', message);
        // } finally {
        //     setSpinner(false);
        // }
    }, []);

    const _addTodo = async (message) => {
        try {
            setSpinner(true);
            const task = await api.createTask(message);

            const newTodos = [{ ...task }, ...todo];

            setTodo(newTodos);
        } catch (messageError) {
            console.log('→ message', messageError);
        } finally {
            setSpinner(false);
        }
    };

    const _removeTask = async (id) => {
        try {
            setSpinner(true);
            await api.removeTask(id);
            const newTodos = todo.filter((val) => val.id !== id);

            setTodo(newTodos);
        } catch (message) {
            console.log('→ message', message);
        } finally {
            setSpinner(false);
        }
    };

    const _updateTask = async (taskParams) => {
        try {
            setSpinner(true);
            const data = await api.updateTask(taskParams);

            const changeTask = todo.map((val) => val.id === data.id ? data : val);

            setTodo(changeTask);
        } catch (message) {
            console.log(message);
        } finally {
            setSpinner(false);
        }
    };

    const _completeAllTasks = async () => {
        const incompleteTask = todo.map((val) => !val.completed);

        if (incompleteTask === 0) {
            return null;
        }

        try {
            setSpinner(true);

            const completedTask = todo.map((val) => ({ ...val, completed: true }));

            await api.completeAllTask(completedTask);
            setTodo(completedTask);
        } catch (message) {
            console.log('→ message', message); 
        } finally {
            setSpinner(false);
        }
    };

    const _handleSubmit = (e) => {
        e.preventDefault();
        if (!textTodo) {
            return;
        }
        _addTodo(textTodo);
        setText("");
    };

    const sortedTask = sortTasksByGroup(todo);
    const filterSearch = (task, filters) => filter ? task.filter((val) => val.message.includes(filters)) : task;
    const filterTodo = filterSearch(sortedTask, filter);
    const _checkAllTaskChecked = todo.every((val) => val.completed);

    const task = filterTodo.map((val) => (
        <CSSTransition
            appear = { true }
            in = { spinner }
            classNames = { {
                enter:       Styles.startInPosition,
                enterActive: Styles.endInPosition,
                exit:        Styles.startOutPosition,
                exitActive:  Styles.endOutPosition,
            } }
            key = { val.id }
            timeout = { 500 }>
            <Task
                className = { Styles.postInStart }
                completed = { val.completed }
                favorite = { val.favorite }
                id = { val.id }
                message = { val.message }
                removeTask = { _removeTask }
                updateTask = { _updateTask }
            />
        </CSSTransition>
    ));

    return (
        <section className = { Styles.scheduler }>
            <main>
                <Spinner isSpinning = { spinner } />
                <header className = { Styles.header }>
                    <h1 className = { Styles.h1 }>Планировщик задач</h1>
                    <input
                        className = { Styles.input }
                        placeholder = 'Поиск'
                        type = 'search'
                        onChange = { (e) => setFilter(e.target.value) }
                    />
                </header>
                <section className = { Styles.section }>
                    <form onSubmit = { _handleSubmit }>
                        <input
                            maxLength = '50'
                            placeholder = 'Описaние моей новой задачи'
                            type = 'text'
                            value = { textTodo }
                            onChange = { (e) => setText(e.target.value) }
                        />
                        <button>Добавить задачу</button>
                    </form>
                    <div>
                        <ul>
                            <TransitionGroup>
                                {task}
                            </TransitionGroup>
                        </ul>
                    </div>
                </section>
                <footer className = { Styles.footer }>
                    <Checkbox
                        checked = { _checkAllTaskChecked }
                        color1 = '#000'
                        color2 = '#fff'
                        onClick = { _completeAllTasks }
                    />
                    <span className = { Styles.completeAllTasks }>Все задачи выполнены</span>
                </footer>
            </main>
        </section>
    );
};

const mapToProps = (state) => ({
    tasks:  state.task.tasks,
});

const mapDispatch = {
    fetchTaskAction,
};

export default connect(mapToProps, mapDispatch)(Schedular);
