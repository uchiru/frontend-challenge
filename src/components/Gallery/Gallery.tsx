import React, {FC} from 'react';
import {Item} from '../Item/Item';
import {useDispatch} from 'react-redux';
import {isLikeAC} from '../../store/reducers/galleryReducer';
import {ImgAppType} from '../types/apiTypes';

type GalleryPropsType = {
    items: Array<ImgAppType>
}

export const Gallery: FC<GalleryPropsType> = React.memo(({items}) => {
    const dispatch = useDispatch();

    return (
        <>
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
        </>

    );
})