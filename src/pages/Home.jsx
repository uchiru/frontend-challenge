import React from 'react';

import style from '../scss/Home.module.scss';

import Card from '../components/Card';

const Home = ({ go, id }) => {
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
    const getItems = {
      method: 'GET',
      headers: {
        'x-api-key': 'live_dMcsZPpLxILErUkue2GtcLR2g5vwrDltkzP9IwgoajiJ6xHz6ZPYa7Nq7O8fttXK',
        'Content-Type': 'application/json',
      },
    };
    fetch('https://api.thecatapi.com/v1/images/search?limit=10', getItems)
      .then((res) => {
        return res.json();
      })
      .then((arr) => setItems(arr));
  }, []);

  return (
    <main className={style.Home}>
      <div className={style.Content}>
        {items.map((obj) => (
          <Card key={obj.id} obj={obj} liked={false} indef={obj} />
        ))}
      </div>
    </main>
  );
};

export default Home;
