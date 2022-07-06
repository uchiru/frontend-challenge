import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';
import s from './Nav.module.css';
import containerStyle from '../common/styles/container.module.css';


export const Nav:FC = React.memo(() => {

    const onClearHandler = () => {
        localStorage.clear()
        window.location.reload()
    }

    return (
        <nav className={s.navBlock}>
            <div className={containerStyle.container}>
                <div className={s.wrapper}>
                    <ul className={s.linkBlock}>
                        <li><NavLink to="/">Все котики</NavLink></li>
                        <li><NavLink to="favorite">Любимые котики</NavLink></li>
                    </ul>
                    <button onClick={onClearHandler}>Очистить LocalStorage</button>
                </div>
            </div>
        </nav>
    );
});

