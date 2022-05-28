import React from 'react';

function Cat({ id, url }) {
  return (
    <div className="cat">
      <img src={url} alt="" />
    </div>
  );
}

export default Cat;