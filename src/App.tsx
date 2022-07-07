import React from 'react';
import {Gallery} from './components/Gallery/Gallery';
import {Nav} from './components/Nav/Nav';
import {HashRouter, Route, Routes} from 'react-router-dom';
import s from './components/Gallery/Gallery.module.css';
import containerStyle from './components/common/styles/container.module.css';
import {Favorite} from './components/Favorite/Favorite';


export const App = () => {

    return (
        <HashRouter>
            <Nav/>
            <div className={s.gallery}>
                <div className={containerStyle.container}>
                    <Routes>
                        <Route path="/" element={<Gallery/>}/>
                        <Route path="favorite" element={<Favorite/>}/>
                    </Routes>
                </div>
            </div>
        </HashRouter>
    );
};

