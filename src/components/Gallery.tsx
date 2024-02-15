import { GalleryItem } from "./GalleryItem";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setDataCat, setStart } from "../redux/dataCatSlice";

function Gallery() {
  // const [catData, setCatData] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const catData = useSelector((state) => state.dataCat.data);
  const start = useSelector((state) => state.dataCat.start);

  useEffect(() => {
    async function getCats() {
      if (start) {
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
        dispatch(setDataCat(data));
        setLoading(false);
      }
      dispatch(setStart())
      setLoading(false);
    }
    getCats();
  }, []);


  const handleClickBtn = () => {}

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
      <button className="more-btn">Показать больше котиков</button>
    </section>
  );
}

export default Gallery;
