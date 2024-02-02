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

    let gridCell = document.createElement("div");
    gridCell.classList.add("col");
    gridCell.classList.add("col-lg");
    gridCell.appendChild(image);
    gridCell.appendChild(heart);
    
    

    document.getElementById("grid").appendChild(gridCell);
  });
}catch (error) {
  console.log(error.message);
}
}


// const getFaveData = (elem) => {
//   const parent = elem.parentElement;
//   const img=parent.querySelector('img').src;
// }

const ListenForLikes = () => {
  const likes = document.querySelectorAll('.heart');
 let LikedImgSrc = [];
  let datalist;
  likes.forEach(like => {
    like.addEventListener('click', (event) => {
      event.target.classList.toggle('like-no');
      event.target.classList.toggle('like-yes'); 
      
      if (event.target.classList.contains('like-yes')) {

        // let FavouriteWrapper = document.createElement("div");
        // FavouriteWrapper.appendChild(like.parentElement);
        // localStorage.setItem('test', FavouriteWrapper.appendChild(like.parentElement))
        // console.log(localStorage)
        // localStorage.getItem('test', FavouriteWrapper.appendChild(like.parentElement))
        // console.log(localStorage)
        //document.getElementById("image-wrapper").appendChild(FavouriteWrapper);
      //   datalist=JSON.parse(localStorage.getItem('test'))
      // LikedImgSrc=datalist;
        LikedImgSrc.push(like.previousSibling.src);
        localStorage.setItem('test', JSON.stringify(LikedImgSrc));
        console.log(localStorage)
         window.href="./favourites.html";
        //console.log(like)
        //console.log(like.previousSibling.src)
        //  console.log(FavouriteWrapper)

        console.log(' сохранено');
        // var like = document.querySelector('.heart');
        // like.id = 'like-yes';
        // getFaveData(event.target);
      } else {
        // var like = document.querySelector('.heart');
        // like.id = 'like-no';
        console.log('removing')
        // getFaveData(event.target);
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