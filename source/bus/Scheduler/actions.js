// Types
import { FETCH_TASKS, FETCH_TASKS_SUCCESS } from './types';

export const fetchTaskAction = (data) => ({
    type:    FETCH_TASKS,
    payload: data,
});

export const fetchTaskActionSuccess = (data) => ({
    type:    FETCH_TASKS_SUCCESS,
    payload: data,
});