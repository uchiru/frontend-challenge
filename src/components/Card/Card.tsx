import React, { FC } from 'react';

import { ICatCard } from 'types/types';

import styles from './Card.module.css';

interface ICardProps {
  card: ICatCard;
  handleLikeCat: (id: string) => void;
}

const Card: FC<ICardProps> = ({ card, handleLikeCat }) => {
  return (
    <div className={styles.card}>
      <img src={card.url} alt="Cat" className={styles.cardCat} />
      <div className={styles.buttonWrapper}>
        <button
          className={
            card.isLiked ? [styles.checked, styles.toggleIcon].join(' ') : styles.toggleIcon
          }
          onClick={() => handleLikeCat(card.id)}
        ></button>
      </div>
    </div>
  );
};

export default Card;
