import React, { FC } from 'react';

import { ICatCard } from 'types/types';
import Card from 'components/Card/Card';

import styles from './CardList.module.css';

interface CardListProps {
  data: ICatCard[];
  handleLikeCat: (id: string) => void;
}

const CardList: FC<CardListProps> = ({ data, handleLikeCat }) => {
  return (
    <main className={styles.wrapper}>
      {data.map((item, index) => (
        <Card card={item} key={item.id + index} handleLikeCat={handleLikeCat} />
      ))}
    </main>
  );
};

export default CardList;
