// Root
import { combineReducers } from 'redux';

// Reducers
import task from '../bus/Scheduler/reducers';

export const reducer = combineReducers({
    task,
});
