export default function CatsList({cats, handleLikeCat}) {
  const emptyHeart = "https://cdn-icons-png.flaticon.com/512/1000/1000621.png"
  const wholeHeart = "https://cdn-icons-png.flaticon.com/512/535/535183.png"
  
  return cats.map(cat =>
    (
      <li className="list-item" key={cat.id}>
        <div className="card">
          <img src={cat.url} alt="random-cat" id={cat.id} className="card__img" />
          <div className="btn-wrapper">
            <input 
              type="image" 
              className="liked-btn"
              src={cat.isLiked ? wholeHeart : emptyHeart}
              alt="like-btn" 
              onClick={() => { handleLikeCat(cat.id) }} 
            />
          </div>
        </div>
      </li>
    )
  )
};
