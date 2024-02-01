const url = `https://api.thecatapi.com/v1/images/search?limit=100`;
const src_heart = `img/favorite.svg`;
const api_key = "live_6QkaEZSm5hKSRpvMVyBSRFebrHNCZE3RqKm8liTu6aONO2wTaeWW88uYkTylWHSr";

const fetchCats = async () => {
  try {
    const response = await fetch(url, {headers: {"x-api-key": api_key,},});
    const data = await response.json();
    let imagesData = await data;
    return imagesData;
  } catch (error) {
    console.log(error.message);
  }
};

const CatsList = async () => {
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

    let gridCell = document.createElement("div");
    gridCell.classList.add("col");
    gridCell.classList.add("col-lg");
    gridCell.appendChild(image);
    gridCell.appendChild(heart);
    

    document.getElementById("grid").appendChild(gridCell);
  });
}

const getFaveData = (elem) => {
  const parent = elem.parentElement;
  const img=parent.querySelector('img').src;
}

const ListenForLikes = () => {
  const likes = document.querySelectorAll('.heart');
  console.log(likes);
  likes.forEach(like => {
    console.log(like)
    like.addEventListener('click', (event) => {
      event.target.classList.toggle('like-no');
      event.target.classList.toggle('like-yes');
      if (event.target.classList.contains('like-yes')) {
        console.log(' сохранено');
        // var like = document.querySelector('.heart');
        // like.id = 'like-yes';
        getFaveData(event.target);
      } else {
        // var like = document.querySelector('.heart');
        // like.id = 'like-no';
        console.log('removing')
        getFaveData(event.target);
      }
    })
  })
}

const CatPinterest = async () => {
  const Run = await CatsList();
  Run;
  ListenForLikes();
}
// CatsList();
CatPinterest();

// fetchCats();



// fetch(url,{headers: {
//   'x-api-key': api_key
// }})
// .then((response) => {
// return response.json();
// })
// .then((data) => {
// let imagesData = data;
// imagesData.map(function(imageData) {

// let image = document.createElement('img');
// let heart = document.createElement('div');
// //use the url from the image object
// image.src = `${imageData.url}`;
// //heart.src = src_heart;
// image.classList.add('image')
// heart.classList.add('heart')

// let gridCell = document.createElement('div');
// gridCell.classList.add('col');
// gridCell.classList.add('col-lg');
// gridCell.appendChild(image);
// gridCell.appendChild(heart);

// document.getElementById('grid').appendChild(gridCell);
// });
// })
// .catch(function(error) {
// console.log(error);
// });