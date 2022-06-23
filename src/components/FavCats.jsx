import CatsList from "./CatsList"

export default function FavCats({ favCats, handleLikeCat }) {
  return (
    <ul className="list list-reset">
      <CatsList cats={favCats} handleLikeCat={handleLikeCat} />
    </ul>
  )
};