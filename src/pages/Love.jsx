import React from 'react';

import style from '../scss/Love.module.scss';

import Card from '../components/Card';

const Love = ({ go, id }) => {
  const [items, setItems] = React.useState([]);
  const firstRender = React.useRef(true);

  React.useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      go(id);
      return;
    }
  });

  React.useEffect(() => {
    const getFavourites = {
      method: 'GET',
      headers: {
        'x-api-key': 'live_dMcsZPpLxILErUkue2GtcLR2g5vwrDltkzP9IwgoajiJ6xHz6ZPYa7Nq7O8fttXK',
        'Content-Type': 'application/json',
      },
    };
    fetch('https://api.thecatapi.com/v1/favourites', getFavourites)
      .then((res) => {
        return res.json();
      })
      .then((arr) => setItems(arr));
  }, []);

  return (
    <main className={style.Love}>
      <div className={style.Content}>
        {items.map((obj) => (
          <Card key={obj.id} obj={obj.image} liked={true} indef={obj} />
        ))}
      </div>
    </main>
  );
};

export default Love;
