import "../App.css";

import React, {  useContext } from "react";
import { Context } from "../context/context";
import CatCard from "./CatCard";

function FavoriteCats() {
  const { favoriteCats } = useContext(Context);

  return (
    <div className="App">
      <CatCard cats={favoriteCats} />
    </div>
  );
}

export default FavoriteCats;
