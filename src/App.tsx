import React, {useEffect, useState} from 'react';
import {Gallery} from './components/Gallery/Gallery';
import {Nav} from './components/Nav/Nav';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import s from './components/Gallery/Gallery.module.css';
import containerStyle from './components/common/styles/container.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from './store/store';
import {ImgAppType} from './components/types/apiTypes';
import {GetItemsTC} from './store/reducers/galleryReducer';
import {isFetchingAC} from './store/reducers/fetchReducer';


export const App = () => {
    const dispatch = useDispatch();
    const items = useSelector<AppStateType, Array<ImgAppType>>(store => store.gallery)
    const fetching = useSelector<AppStateType, boolean>(store => store.fetch.isFetching)
    const filteredItems = items.filter(item => item.isLike)

    useEffect(() => {
        fetching &&
            // @ts-ignore
            dispatch(GetItemsTC())
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
        <BrowserRouter>
            <Nav/>
            <div className={s.gallery}>
                <div className={containerStyle.container}>
                    <div className={s.imagesWrapper}>
                        <Routes>
                            <Route path="/" element={<Gallery items={items}/>}/>
                            <Route path="favorite" element={<Gallery items={filteredItems}/>}/>
                        </Routes>
                        {fetching && <div>... загружаем еще котиков ...</div>}
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};

