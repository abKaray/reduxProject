import { put, call } from 'redux-saga/effects';
import { fetchTaskAction } from '../actions';
// import { showSpinner } from '../../../feed/saga/uiSaga/actions';

import { api } from '../../../REST';

export function* fetchTaskAsync() {
    try {
        // yield put(showSpinner(true));
        console.log('stater');
        const response = yield call(api.fetchTasks);


        console.log(response);
        yield put(fetchTaskAction(response));
    } catch (error) {
        console.log(error);
    } finally {
        // yield put(showSpinner(false));
    }
}
