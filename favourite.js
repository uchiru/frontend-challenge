//const src_heart = `img/favorite_fill.svg`;

let FavouritesAdding = async () => {
  const LikedImgSrc = await JSON.parse(localStorage.getItem("test"));
  console.log(LikedImgSrc);
  LikedImgSrc.forEach((el) => {
    let heart = document.createElement("div");
    let image = document.createElement("img");
    image.src = `${el}`;
    heart.src = src_heart;
    image.classList.add("image");
    heart.classList.add("like");
    let gridCell = document.createElement("div");
    gridCell.classList.add("col");
    gridCell.classList.add("col-lg");
    gridCell.appendChild(image);
    gridCell.appendChild(heart);
    //gridCell.appendChild(heart);
    document.getElementById("image-wrapper").appendChild(gridCell);
    // console.log(LikedImgSrc);
  });
  // LikedImgSrc.push(dataList);
  // localStorage.setItem('test', JSON.stringify(LikedImgSrc));
  // localStorage.clear();
};

let FavouritesDeleting = async () => {};

const FavouritesPage = async () => {
  FavouritesAdding();
};

FavouritesPage();
