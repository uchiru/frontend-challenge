import React, { FC } from 'react';

import CardList from 'components/CardList/CardList';
import { ICatCard } from 'types/types';

import styles from './AllCats.module.css';

interface AllCatsProps {
  data: ICatCard[];
  handleLikeCat: (id: string) => void;
  fetching: boolean;
}

const AllCats: FC<AllCatsProps> = ({ data, handleLikeCat, fetching }) => {
  if (data.length !== 0) {
    return (
      <>
        <CardList data={data} handleLikeCat={handleLikeCat} />
        {fetching && <p className={styles.loadingCats}>... загружаем еще котиков ...</p>}
      </>
    );
  }

  return <h1>Empty</h1>;
};

export default AllCats;
