import { useDispatch, useSelector } from "react-redux";
import { favoriteRemove, favoriteAdd } from "../redux/dataCatSlice";
import Heart from "../assets/heart-empty.svg";

type GalleryItemType = {
  breeds?: [];
  height: number;
  id: string;
  url: string;
  width: number;
};

export function FavoriteItem({
  id,
  url,
  height,
  width,
  breeds,
}: GalleryItemType) {
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.dataCat.favorite);
  
  const handleClick = () => {
    dispatch(favoriteRemove(id));

  };


  if (favorite.length === 0) {
    return (
      <>
        <h1>Любимых котиков пока нет...</h1>
      </>
    );
  }
  
  
  return (
    <li className="gallery-item">
      <img
        className="gallery-img"
        src={url}
        id={id}
        width={height}
        height={width}
        alt=""
      ></img>
      <button className="gallery-button" onClick={handleClick}>
        <img className="gallery-heart" src={Heart} />
      </button>
    </li>
  );
}
