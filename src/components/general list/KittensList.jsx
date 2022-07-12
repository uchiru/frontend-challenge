import React, {useState, useContext, useEffect} from 'react'
import {observer} from 'mobx-react-lite';

import {Context} from '../../index';
import KittenItem from '../item/KittenItem';
import './KittensList.scss';

const KittensList = observer(() => {
  const {kittens} = useContext(Context);

  const [currentPage, setCurrentPage] = useState(0);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/images/search?page=${currentPage}&limit=15&order=Asc`)
      .then((res) => res.json())
      .then((responses) => {
        kittens.setItems([...kittens.items, ...responses])
        setCurrentPage((prevState) => prevState + 1)
      })
      .finally(() => setFetching(false))
  }, [fetching])

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return function() {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [])

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 60) {
      setFetching(true);
    };
  };

  return (
    <div className='kittens-list'>
      {kittens.items.map((item) =>
        <div key={item.id}>
            <KittenItem
              item={item}
            />
        </div>
      )}
    </div>
  );
});

export default KittensList;
