import "../App.css";
import React, { useState, useContext } from "react";
import { Context } from "../context/context";
import heart from "../img/heart.png";
import heartFull from "../img/heartFull.png";
import orangeHeart from "../img/orangeHeart.png";
function CatCard({ cats }) {
  const { getFavoriteCats, favoriteCats } = useContext(Context);
  // измененеие сердечек

  const [catsWithHeart, setCatsWithHeart] = useState("");
  const [catsWithFullHeart, setCatsWithFullHeart] = useState("");
 
  const addHeart = (e, id) => {
    e.preventDefault();
    setCatsWithHeart(id);
    setCatsWithFullHeart("");
  };
  const deleteHeart = (e) => {
    e.preventDefault();
    setCatsWithHeart("");
    setCatsWithFullHeart("");
  };
  const addFullHeart = (e, id) => {
    e.preventDefault();
    setCatsWithFullHeart(id);
  };
  const deleteFullHeart = (e) => {
    e.preventDefault();
    setCatsWithFullHeart("");
  };

  const addHeartOnFavorite = (cat) => {
    getFavoriteCats(cat);
     
  };

  return (
    <div className="AllCats-container">
      {cats &&
        cats.map((cat) => (
          <div className="catItem" key={cat.id}>
            {favoriteCats.includes(cat) && (
              <img src={orangeHeart} className="heart" alt="cat" />)}

            <img
              className="catPhoto"
              src={cat.url}
              alt="cat"
              onMouseEnter={(e) => { addHeart(e, cat.id) }}
              onMouseLeave={(e) => { deleteHeart(e, cat.id) }}
            />

            {catsWithHeart === cat.id && (
              <img
                src={heart}
                onMouseEnter={(e) => { addFullHeart(e, cat.id) }}
                onMouseLeave={(e) => { deleteFullHeart(e, cat.id) }}
                className="heart"
                alt="cat"
              />
            )}
            {catsWithFullHeart === cat.id && (
              <img
                src={heartFull}
                className="heart"
                alt="cat"
                onClick={() => { addHeartOnFavorite(cat) }}
              />
            )}
            
          </div>
        ))}
    </div>
  );
}

export default CatCard;
