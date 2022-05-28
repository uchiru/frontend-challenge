import React from 'react';
import Cat from './Cat';

function CatsList({ cats }) {
  return (
    <main>
      <section className="cats">
        {cats.map((cat) => <Cat key={cat.id} id={cat.id} url={cat.url}/>)}
      </section>
      <p className="uploading-cats-label">...загружаем ещё котиков...</p>
    </main>
  );
}

export default CatsList;