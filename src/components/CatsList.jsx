import React from 'react';
import Cat from './Cat';

function CatsList({ cats, toggleFavorites }) {

  const generateCats = () => {
    return cats.map((cat) => {
      return (
        <Cat
          key={cat.id}
          id={cat.id}
          url={cat.url}
          isFavorite={cat.isFavorite}
          toggleFavorites={toggleFavorites}
        />
      )
    })
  }

  return (
    <main>
      <section className="cats">
        {generateCats()}
      </section>
      <p className="uploading-cats-label">...загружаем ещё котиков...</p>
    </main>
  );
}

export default CatsList;