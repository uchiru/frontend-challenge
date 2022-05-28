import React from 'react'

import CatItem from '../CatItem'

import './CatList.scss'

const CatList: React.FC = () => {
    return (
        <div className='cat__wrapper'>
            <CatItem />
            <CatItem />
            <CatItem />
            <CatItem />
            <CatItem />
            <CatItem />
            <CatItem />
        </div>
    )
}

export default CatList
