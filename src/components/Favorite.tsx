import { useSelector } from "react-redux";
import { FavoriteItem } from "./FavoriteItem";

export function Favorite() {
  const favorite = useSelector((state) => state.dataCat.favorite);

  if (favorite.length === 0) {
    return (
      <>
        <h1>Любимых котиков пока нет...</h1>
      </>
    );
  }

  return (
    <section className="gallery">
      <ul className="gallery-list">
        {favorite.map((cat, i) => (
          <FavoriteItem key={i} {...cat} />
        ))}
      </ul>
    </section>
  );
}
