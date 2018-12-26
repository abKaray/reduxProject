// Core
import { takeEvery } from 'redux-saga/effects';
// Actions
import { fetchTaskAsync } from '../bus/Scheduler/workers';
// Types
import { FETCH_TASKS } from '../bus/Scheduler/types';

export function* rootSaga () {
    console.log(fetchTaskAsync);
    yield takeEvery(FETCH_TASKS, fetchTaskAsync);
}
