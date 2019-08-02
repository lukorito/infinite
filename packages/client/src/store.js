import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import rootReducer from './redux/reducers';

export default function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(thunk, promise),
    );
}
