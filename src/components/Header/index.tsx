import React from 'react'
import { NavLink } from 'react-router-dom'

import './Header.scss'

const Header: React.FC = () => {
    return (
        <header className='header'>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) =>
                                isActive ? 'link_active' : undefined
                            }
                        >
                            Все котики
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/favorites'
                            className={({ isActive }) =>
                                isActive ? 'link_active' : undefined
                            }
                        >
                            Любимые котики
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
