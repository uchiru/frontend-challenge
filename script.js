const url = `https://api.thecatapi.com/v1/images/search?limit=100`;
const src_heart = `img/favorite.svg`;
const api_key =
  "live_6QkaEZSm5hKSRpvMVyBSRFebrHNCZE3RqKm8liTu6aONO2wTaeWW88uYkTylWHSr";
let LikedImgSrc;
const loading = document.getElementById("loader");

const fetchCats = async () => {
  try {
    const response = await fetch(url, { headers: { "x-api-key": api_key } });
    const data = await response.json();
    let imagesData = sessionStorage.getItem("url")
      ? JSON.parse(sessionStorage.getItem("url"))
      : await data;
    sessionStorage.setItem("url", JSON.stringify(imagesData));
    return imagesData;
  } catch (error) {
    console.log(error.message);
  }
};

const drawItems = function (images) {
  images.map(function (item) {
    let image = document.createElement("img");
    let heart = document.createElement("div");
    let gridCell = document.createElement("div");
    image.src = `${item.url}`;
    heart.src = src_heart;
    image.classList.add("image");
    heart.classList.add("heart");
    LikedImgSrc = sessionStorage.getItem("test")
      ? JSON.parse(sessionStorage.getItem("test"))
      : [];
    if (LikedImgSrc.includes(item.url)) {
      heart.classList.add("like-yes");
    } else {
      heart.classList.add("like-no");
    }
    gridCell.classList.add("col");
    gridCell.classList.add("col-lg");
    gridCell.appendChild(image);
    gridCell.appendChild(heart);
    document.getElementById("grid").appendChild(gridCell);
  });
};

const CatsList = async () => {
  try {
    let ImagesList = await fetchCats();
    drawItems(ImagesList);
    loading.classList.add("hidden");
  } catch (error) {
    console.log(error.message);
  }
};

const ListenForLikes = async () => {
  const likes = document.querySelectorAll(".heart");
  likes.forEach((like) => {
    like.addEventListener("click", (event) => {
      event.target.classList.toggle("like-no");
      event.target.classList.toggle("like-yes");
      let LikedImgSrc = sessionStorage.getItem("test")
        ? JSON.parse(sessionStorage.getItem("test"))
        : [];
      if (event.target.classList.contains("like-yes")) {
        LikedImgSrc.push(like.previousSibling.src);
        sessionStorage.setItem("test", JSON.stringify(LikedImgSrc));
      } else {
        LikedImgSrc = LikedImgSrc.filter(
          (image) => image !== like.previousSibling.src
        );
        sessionStorage.setItem("test", JSON.stringify(LikedImgSrc));
      }
    });
  });
};

const MainPage = async () => {
  const Run = await CatsList();
  Run;
  ListenForLikes();
};
MainPage();
