import { GalleryItem } from "./GalleryItem";
import { useEffect, useState } from "react";

export function GalleryList() {
  const [catData, setCatData] = useState([]);

  const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key":
      "live_ZX4wnBpcbd9QpOKs9xDa1pLymitdUPkDAp2Cy7VQSrDYs35tAxdokVbiJNKiYWiC",
  });

  type Request = {
    method: string;
    headers: Headers;
    redirect: string;
  };

  useEffect(() => {
    const requestOptions: Request = {
      method: "GET",
      headers: headers,
      redirect: "follow",
    };

    fetch("https://api.thecatapi.com/v1/images/search?limit=4", requestOptions)
      .then((response) => response.json())
      .then((result) => setCatData(result))
      .catch((error) => console.log("error", error));
  }, []);

  if (!catData) {
    <>
      <h1>Загрузка котиков...</h1>
    </>;
  }

  return (
    <ul className="gallery-list">
      {catData.map((cat, i) => (
        <GalleryItem key={i} {...cat} />
      ))}
    </ul>
  );
}
