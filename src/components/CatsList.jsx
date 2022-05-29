import React from 'react';
import Cat from './Cat';

function CatsList({ cats, addToFavorites, removeFromFavorites }) {

  const generateCats = () => {
    return cats.map((cat) => {
      return (
        <Cat
          key={cat.id}
          id={cat.id}
          url={cat.url}
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
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