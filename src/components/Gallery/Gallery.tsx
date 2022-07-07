import React, {FC, useEffect} from 'react';
import {Item} from '../Item/Item';
import {useDispatch, useSelector} from 'react-redux';
import {GetItemsTC, isLikeAC} from '../../store/reducers/galleryReducer';
import {ImgAppType} from '../types/apiTypes';
import s from './Gallery.module.css';
import {isFetchingAC} from '../../store/reducers/fetchReducer';
import {AppStateType} from '../../store/store';

export const Gallery: FC = React.memo(() => {
    const dispatch = useDispatch();
    const items = useSelector<AppStateType, Array<ImgAppType>>(store => store.gallery)
    const fetching = useSelector<AppStateType, boolean>(store => store.fetch.isFetching)

    useEffect(() => {
        if (fetching) { // @ts-ignore
            dispatch(GetItemsTC())
        }
    }, [fetching])


    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    const scrollHandler = (e: any) => {
        if ((e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight)) < 100) {
            dispatch(isFetchingAC(true))
        }
    }

    return (
        <div className={s.imagesWrapper}>
            {items.map(item => {

                const imgStyleForMapping = {
                    backgroundImage: `url(${item.url})`,
                    backgroundSize: 'cover'
                }

                const onLikeHandler = (islike: boolean) => {
                    dispatch(isLikeAC(item.id, islike))
                }

                return (
                    <Item
                        key={item.id}
                        callback={onLikeHandler}
                        style={imgStyleForMapping}
                        isLike={item.isLike}
                    />
                )
            })}
            {fetching && <div>... загружаем еще котиков ...</div>}
        </div>
    );
})