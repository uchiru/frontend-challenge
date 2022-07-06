import {ImgAppType, ImgResponseType} from '../../components/types/apiTypes';
import {Dispatch} from 'redux';
import {imagesAPI} from '../../api/api';
import {isFetchingAC} from './fetchReducer';

type ActionType = GetItemsActionType | SetLikeActionType
type GetItemsActionType = ReturnType<typeof GetItemsAC>
type SetLikeActionType = ReturnType<typeof isLikeAC>

const GetItemsAC = (items: Array<ImgResponseType>) => {
    return {
        type: 'GET_ITEMS',
        items
    } as const
}

export const isLikeAC = (id: string, isLike: boolean) => {
    return {
        type: 'SET_LIKE',
        isLike,
        id
    } as const
}




const initialState: Array<ImgAppType> = []


export const galleryReducer = (state: Array<ImgAppType> = initialState, action: ActionType): Array<ImgAppType> => {
    switch (action.type) {

        case 'GET_ITEMS': {
            return [...state, ...action.items.map(item => ({...item, isLike: false}))]
        }

        case 'SET_LIKE': {
            return state.map(item => item.id !== action.id ? item : {...item, isLike: action.isLike})
        }

        default: {
            return state
        }
    }
}

export const GetItemsTC = () => (dispatch: Dispatch) => {
    imagesAPI.getImages()
        .then((res) => {
            dispatch(GetItemsAC(res.data))
        })
        .catch((error) => console.warn(error))
        .finally(() => {
            dispatch(isFetchingAC(false))
        })
}