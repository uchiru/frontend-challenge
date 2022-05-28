import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import Favorites from './pages/Favorites'

const App: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/favorites' element={<Favorites />} />
                    <Route path='*' element={<Home />} />
                </Routes>
            </main>
        </>
    )
}

export default App
