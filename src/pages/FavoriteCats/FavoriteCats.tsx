import React, { FC } from 'react';

import CardList from 'components/CardList/CardList';
import { ICatCard } from 'types/types';
import sadEmoji from 'assets/images/sadEmoji.webp';

import styles from './FavoriteCats.module.css';

interface FavoritesCatsProps {
  data: ICatCard[];
  handleLikeCat: (id: string) => void;
}

const FavoriteCats: FC<FavoritesCatsProps> = ({ data, handleLikeCat }) => {
  if (data.length === 0) {
    return (
      <div className={styles.wrapper}>
        <img src={sadEmoji} alt="Sad" />
        <h1>Вам не нравятся котики?</h1>
      </div>
    );
  }
  return (
    <>
      <CardList data={data} handleLikeCat={handleLikeCat} />
    </>
  );
};

export default FavoriteCats;
