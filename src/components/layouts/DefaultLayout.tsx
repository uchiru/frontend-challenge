import './style.scss'

import { FC, PropsWithChildren } from "react"

export const DefaultLayout: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className='layout-wrapper'>
            <header className='layout-header'>
                <div className="layout-header__wrapper">
                    <div className='layout-header__item'>Все котики</div>
                    <div className='layout-header__item'>Любимые котики</div>
                </div>
            </header>
            {children}
        </div>
    );
}
