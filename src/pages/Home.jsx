import React from 'react';
import Header from '../components/Header';
import CatsList from '../components/CatsList';

function Home({ cats }) {
  return (
    <div>
      <Header/>
      <CatsList cats={cats}/>
    </div>
  );
}

export default Home;