let FavouritesAdding = async () => {
  const LikedImgSrc = await JSON.parse(localStorage.getItem("test"));
  console.log(LikedImgSrc);
  LikedImgSrc.forEach((el) => {
    let image = document.createElement("img");
    image.src = `${el}`;
    image.classList.add("img");

    let gridCell = document.createElement("div");
      gridCell.classList.add("col");
      gridCell.classList.add("col-lg");
      gridCell.appendChild(image);
      //gridCell.appendChild(heart);
    document.getElementById("image-wrapper").appendChild(gridCell);
    // console.log(LikedImgSrc);
  });
  // LikedImgSrc.push(dataList);
  // localStorage.setItem('test', JSON.stringify(LikedImgSrc));
  // localStorage.clear();
};
FavouritesAdding();
