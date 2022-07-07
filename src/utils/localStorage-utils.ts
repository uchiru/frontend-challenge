import {AppStateType} from '../store/store';


export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('app-state')
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (e) {
        return undefined
    }
}

export const saveState = (state: AppStateType) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('app-state', serializedState)
        return JSON.parse(serializedState)
    } catch (e) {
    }
}