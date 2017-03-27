/**
 * Created by Nealyang on 17/3/24.
 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { asyncMiddleware } from 'redux-amrc';

let createStoreWithMiddleware;

if (process.env.NODE_ENV === 'production') {
    createStoreWithMiddleware = compose(
        applyMiddleware(thunk, asyncMiddleware),
    )(createStore);
} else {
    createStoreWithMiddleware = compose(
        applyMiddleware(thunk, asyncMiddleware),
        typeof window === 'object' &&
        typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f//启动redux-tools查看state状态
    )(createStore);
}

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers/index').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}

