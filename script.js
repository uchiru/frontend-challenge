const url = `https://api.thecatapi.com/v1/images/search?limit=100`;
const src_heart = `img/favorite.svg`;
const api_key =
  "live_6QkaEZSm5hKSRpvMVyBSRFebrHNCZE3RqKm8liTu6aONO2wTaeWW88uYkTylWHSr";
const container = document.getElementById("grid");
const loadMore = document.getElementById("load-more");
let start = 0;
let limit = 15;
let data = [];

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

const CatsList = async () => {
  try {
    const ImagesList = await fetchCats();
    ImagesList.map(function (imageList) {
      let image = document.createElement("img");
      let heart = document.createElement("div");
      //use the url from the image object
      image.src = `${imageList.url}`;
      heart.src = src_heart;
      image.classList.add("image");
      heart.classList.add("heart");
      heart.classList.add("like-no");
      image.classList.add("lazy"); //добавляем ленивую загрузку

      let gridCell = document.createElement("div");

      gridCell.classList.add("col");
      gridCell.classList.add("col-lg");
      gridCell.appendChild(image);
      gridCell.appendChild(heart);
      document.getElementById("grid").appendChild(gridCell);
    });
    //data = ImagesList.map((el) => el.url)
  } catch (error) {
    console.log(error.message);
  }
};

// const getFaveData = (elem) => {
//   const parent = elem.parentElement;
//   const img=parent.querySelector('img').src;
// }

const ListenForLikes = async () => {
  const likes = document.querySelectorAll(".heart");
  likes.forEach(async (like) => {
    like.addEventListener("click", (event) => {
      event.target.classList.toggle("like-no");
      event.target.classList.toggle("like-yes");
      let LikedImgSrc = localStorage.getItem("test")
        ? JSON.parse(localStorage.getItem("test"))
        : [];
      if (event.target.classList.contains("like-yes")) {
        LikedImgSrc.push(like.previousSibling.src);
        localStorage.setItem("test", JSON.stringify(LikedImgSrc));
        //console.log(LikedImgSrc[0]);
        console.log("сохранено");
        console.log(LikedImgSrc);
        //localStorage.clear();
        // var like = document.querySelector('.heart');
        // getFaveData(event.target);
      } else {
        LikedImgSrc = LikedImgSrc.filter((image) => image !== like.previousSibling.src);
        localStorage.setItem("test", JSON.stringify(LikedImgSrc));
        console.log("removing");
        console.log(LikedImgSrc);
        //localStorage.removeItem("test", LikedImgSrc[LikedImgSrc.length - 1]);
        // console.log(LikedImgSrc[LikedImgSrc.length - 1]);
        // window.href = "./favourites.html";
        // var like = document.querySelector('.heart');
        // getFaveData(event.target);
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

// function renderData(data) {
//   data.forEach(item => {
//     const element=document.createElement('div');
//     element.src = item;
//     container.appendChild(element)
//   })
// }

// function loadData(){
//   const end = start + limit;
//   const newData=data.slice(start, end);
//   renderData(newData);
//   start = end;
//   if (start>=data.length){
//     loadMore.style.display = 'none';
//   }
// }

// loadMore.addEventListener('click', loadData)
