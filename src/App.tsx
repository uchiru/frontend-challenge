import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import AllCats from 'pages/AllCats/AllCats';
import FavoriteCats from 'pages/FavoriteCats/FavoriteCats';
import Header from 'components/Header/Header';
import { IPagination } from 'types/request';
import { ICatCard } from 'types/types';
import { images } from 'api';

function App() {
  const [paginationOptions, setPaginationOptions] = useState<IPagination>({ page: 1, limit: 15 });
  const [fetching, setFetching] = useState<boolean>(true);
  const [data, setData] = useState<ICatCard[]>([]);

  const handleLikeCat = (id: string) => {
    const updateData = data.map(cat => {
      if (cat.id !== id) {
        return cat;
      }
      return { ...cat, isLiked: cat.isLiked ? false : true };
    });
    setData(updateData);
  };

  useEffect(() => {
    if (!fetching) {
      return;
    }
    (async function () {
      try {
        const response = await images.getImages(paginationOptions);
        const dataBackend = await response.json();
        const newData = dataBackend.map((current: ICatCard) => {
          let obj = { ...current };
          obj.isLiked = false;
          return obj;
        });
        setData([...data, ...newData]);
        setPaginationOptions(prev => ({ ...prev, page: prev.page + 1 }));
      } catch (error) {
        console.log(error);
        setFetching(false);
      } finally {
        setFetching(false);
      }
    })();
  }, [fetching, data, paginationOptions]);

  useEffect(() => {
    const scrollHandler = (event: Event | any) => {
      if (
        event.target.documentElement.scrollHeight -
          (event.target.documentElement.scrollTop + window.innerHeight) <
        100
      ) {
        setFetching(true);
      }
    };

    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [setFetching]);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<AllCats data={data} handleLikeCat={handleLikeCat} fetching={fetching} />}
        />
        <Route
          path="favorites"
          element={
            <FavoriteCats data={data.filter(cat => cat.isLiked)} handleLikeCat={handleLikeCat} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
