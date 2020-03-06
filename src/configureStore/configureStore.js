import { createStore, combineReducers } from 'redux';
import actionsReducer from '../reducers/actions';
import filtersReducer from '../reducers/filters';

export default () => {
    const store = createStore(
        combineReducers({
            actions: actionsReducer,
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}