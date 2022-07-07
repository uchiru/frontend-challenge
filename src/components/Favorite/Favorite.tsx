import React, {FC} from 'react';
import {Item} from '../Item/Item';
import {useDispatch, useSelector} from 'react-redux';
import {isLikeAC} from '../../store/reducers/galleryReducer';
import {ImgAppType} from '../types/apiTypes';
import s from '../Gallery/Gallery.module.css';
import {AppStateType} from '../../store/store';


export const Favorite: FC = React.memo(() => {
    const dispatch = useDispatch();
    const items = useSelector<AppStateType, Array<ImgAppType>>(store => store.gallery)
        .filter(item => item.isLike)


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
        </div>

    );
})