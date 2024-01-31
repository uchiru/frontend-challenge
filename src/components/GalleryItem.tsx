
import Heart from "../assets/heart-empty.svg";

type GalleryItemType = {
  breeds?: [];
  height: number;
  id: string;
  url: string;
  width: number;
}

export function GalleryItem({id, url, height, width, breeds}:GalleryItemType) {

  return (
    <li className="gallery-item">
      <img className="gallery-img" src={url} id={id} width={height} height={width} alt=''></img>
      <button className="gallery-button">
        <img className="gallery-heart" src={Heart} />
      </button>
    </li>
  );
}
