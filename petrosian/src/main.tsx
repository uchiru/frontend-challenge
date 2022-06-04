import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import Random from './random';
import Gallary from './gallary';
import './main.css';


interface IMain { }

const Main: React.FC<IMain> = () => {
    return <div className='container-fluid '>
        <h1 >main</h1>
        <div className='content'>
            <Gallary />
        </div>
    </div>;
};

export default Main;