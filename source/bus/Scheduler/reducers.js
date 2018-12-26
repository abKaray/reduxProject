import { FETCH_TASKS_SUCCESS } from './types';

const initialState = {
    tasks: [],
};

const taskReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_TASKS_SUCCESS:
            return { ...state, tasks: payload.data };
        default:
            return state;
    }
};

export default taskReducer;