const src_heart = `img/favorite_fill.svg`;
let LikedImgSrc;

let FavouritesAdding = async () => {
  LikedImgSrc = await JSON.parse(sessionStorage.getItem("test"));
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
    document.getElementById("image-wrapper").appendChild(gridCell);
  });
};

let FavouritesDeleting = () => {
  const likes = document.querySelectorAll(".like");
  likes.forEach((like) => {
    like.addEventListener("click", (event) => {
      event.target.classList.toggle("like-no");
      LikedImgSrc = LikedImgSrc.filter(
        (image) => image !== like.previousSibling.src
      );
      sessionStorage.setItem("test", JSON.stringify(LikedImgSrc));
      like.previousSibling.parentNode.remove();
    });
  });
};

const FavouritesPage = async () => {
  const Run = await FavouritesAdding();
  Run;
  FavouritesDeleting();
};

FavouritesPage();
