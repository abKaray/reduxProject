// Core
import { createStore, applyMiddleware } from 'redux';
//  Instruments
import { composeEnhancers, middleware, sagaMiddleware } from './middleware';
import { rootSaga } from './rootSaga';
import { reducer } from './rootReducer';

// const sagaMiddleware = createSagaMiddleware();
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(...middleware)),
);

sagaMiddleware.run(rootSaga);
