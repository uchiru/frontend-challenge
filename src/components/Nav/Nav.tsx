import React, {FC, useState} from 'react';
import {NavLink} from 'react-router-dom';
import s from './Nav.module.css';
import containerStyle from '../common/styles/container.module.css';
import {Burger} from './Burger/Burger';


export const Nav: FC = React.memo(() => {

    const [isShow, setIsShow] = useState<boolean>(false)

    const onClearHandler = () => {
        localStorage.clear()
        window.location.reload()
    }

    const onBurgerHandler = (showInBurger: boolean) => {
        setIsShow(showInBurger)
    }

    return (
        <nav className={s.navBlock}>
            <div className={`${containerStyle.container} ${s.mobileBurgerWrapper}`}>
                <div className={`${s.wrapper} ${!isShow && s.hidden}`}>
                    <ul className={s.linkBlock}>
                        <li onClick={() => onBurgerHandler(false)}><NavLink to="/">Все котики</NavLink></li>
                        <li onClick={() => onBurgerHandler(false)}><NavLink to="favorite">Любимые котики</NavLink></li>
                    </ul>
                    <button
                        onClick={onClearHandler}>Очистить LocalStorage
                    </button>
                </div>
                <Burger
                    setShow={onBurgerHandler}
                    show={isShow}
                />
            </div>
        </nav>
    );
});

