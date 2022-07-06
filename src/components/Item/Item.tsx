import React, {FC, useCallback} from 'react';
import s from './Item.module.css';
import {ReactComponent as Heart} from '../common/icon/heart.svg';

type ItemPropsType = {
    style: {
        backgroundImage: string,
        backgroundSize: string
    }
    callback: (isLike: boolean) => void
    isLike: boolean
}

export const Item: FC<ItemPropsType> = React.memo(({style, callback, isLike}) => {

    const onClickHandler = useCallback(() => {
        callback(!isLike)
    }, [isLike, callback])

    return (
        <div className={s.itemBlock} style={style}>
            <button onClick={onClickHandler} className={s.heart}>
                <Heart className={`${s.heartImg} ${isLike ? s.liked : ''}`} alt="add to favorite"/>
            </button>
        </div>
    );
})

