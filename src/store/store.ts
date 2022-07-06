import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from './reducers/rootReducer';
import {loadState, saveState} from '../utils/localStorage-utils';

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk))

store.subscribe(() => {
    saveState({
            gallery: store.getState().gallery,
            fetch: store.getState().fetch
        }
    )
})

// @ts-ignore
window.store = store;