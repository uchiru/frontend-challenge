type ActionType = ReturnType<typeof isFetchingAC>

export const isFetchingAC = (isFetching: boolean) => {
    return {
        type: 'IS_FETCHING',
        isFetching
    } as const
}

const initialState = {
    isFetching: true
}

export const fetchReducer = (state: { isFetching: boolean } = initialState, action: ActionType) => {
    switch (action.type) {
        case 'IS_FETCHING': {
            return {isFetching: action.isFetching}
        }

        default: {
            return state
        }
    }
}