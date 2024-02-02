import { GalleryItem } from "./GalleryItem";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setDataCat } from "../redux/dataCatSlice";

function Gallery() {
  // const [catData, setCatData] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const catData = useSelector((state) => state.dataCat.data)
  
  useEffect(() => {
    async function getCats() {
      const { data } = await axios.get(
        "https://api.thecatapi.com/v1/images/search?limit=4",
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key":
              "live_ZX4wnBpcbd9QpOKs9xDa1pLymitdUPkDAp2Cy7VQSrDYs35tAxdokVbiJNKiYWiC",
          },
        }
      );
      dispatch(setDataCat(data))
      setLoading(false);
    }
    getCats();
  }, []);

  if (loading) {
    return (
      <>
        <h1>Загрузка котиков...</h1>
      </>
    );
  }
  return (
    <section className="gallery">
      <ul className="gallery-list">
        {catData.map((cat, i) => (
          <GalleryItem key={i} {...cat} />
        ))}
      </ul>
    </section>
  );
}

export default Gallery;
