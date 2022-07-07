import React, {FC} from 'react';
import s from './Burger.module.css';


type BurgerPropsType = {
    show: boolean
    setShow: (show: boolean) => void
}

export const Burger: FC<BurgerPropsType> = ({show, setShow}) => {

    const onBurgerHandler = () => {
        setShow(!show)
    }

    return (
        <div
            className={`${s.navIcon} ${show ? s.open : ''}`}
            onClick={onBurgerHandler}
        >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

