import './CatsCardList.css';
import { useEffect, useState } from 'react'
import Preloader from '../Preloader/Preloader';
import { useLocation } from 'react-router-dom';

const CatsCardList = () => {
  const [savedCats, setSavedCats] = useState([]);
  const [catImages, setCatImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [likes, setLikes] = useState(() => {
    const savedLikes = JSON.parse(localStorage.getItem('likes'));
    return savedLikes || {};
  });

  const { pathname } = useLocation();

  useEffect(() => {
    // Проверяем, есть ли уже данные в состоянии компонента
    if (catImages.length === 0) {
      fetchCatImages();
    }
  }, []);

  const fetchCatImages = async () => {
    try {
      setLoading(true);
      const savedCatImages = JSON.parse(localStorage.getItem('catImages'));
      if (savedCatImages) {
        setCatImages(savedCatImages);
      } else {
        const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=200&api_key=live_8VHZC6qqrZx16wU609ocvPSn0JZTcz3s0MQn1JK6fbeaQw7oy30jNYH6iRlFkmWD");
        const data = await response.json();
        setCatImages(data);
        localStorage.setItem('catImages', JSON.stringify(data));
        setLikes(Object.fromEntries(data.map(cat => [cat.id, false])));
      }
    } catch (error) {
      console.error('Error fetching cat images:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveCat = (id) => {
    // Обновляем состояние лайка для конкретной карточки
    setLikes(prevLikes => ({
      ...prevLikes,
      [id]: !prevLikes[id]
    }));
    localStorage.setItem('likes', JSON.stringify({
      ...likes,
      [id]: !likes[id]
    }));

    handleSave(catImages.find(cat => cat.id === id));
  }

  function handleDeleteCat(id) {
    const updatedCats = savedCats.filter((cat) => cat.catId !==  id);
    setSavedCats(updatedCats);
    localStorage.setItem('savedCats', JSON.stringify(updatedCats));
  }

  function handleSave(cat) {
    const savedCatsFromStorage = JSON.parse(localStorage.getItem('savedCats')) || [];
  
    const isSaved = savedCatsFromStorage.some((element) => cat.id === element.catId);
    if (!isSaved) {
      const updatedCats = [{ catId: cat.id, ...cat }, ...savedCatsFromStorage];
      localStorage.setItem('savedCats', JSON.stringify(updatedCats));
    } else {
      const updatedCats = savedCatsFromStorage.filter((element) => element.catId !== cat.id);
      localStorage.setItem('savedCats', JSON.stringify(updatedCats));
    }
  }

  useEffect(() => {
    const savedCatsFromStorage = JSON.parse(localStorage.getItem('savedCats')) || [];
    setSavedCats(savedCatsFromStorage);
  }, []);

  return (
    <section>
    <div className="cat-grid">
      {loading ? <Preloader/> :
      (pathname === '/' && catImages.length !== 0) ?
      catImages.map(cat => (
        <div className="cat-card" key={cat.id}>
          <img src={cat.url} alt="Cat"/>
          <button className={likes[cat.id] ? "heart-btn heart-btn_active" : "heart-btn"} onClick={() => handleSaveCat(cat.id)}></button>
        </div>
      )) :  (pathname === '/saved-cats' && savedCats.length !== 0) ?
      savedCats.map(cat => (
        <div className="cat-card"  key={cat.catId}>
          <img src={cat.url} alt="Cat"/>
          <button className="heart-btn heart-btn_active" onClick={() => handleDeleteCat(cat.catId)}></button>
        </div>
      )) : 
      <p className='gallery__serch-error'>Нет сохранённых котиков</p>
      }
    </div>
    </section>
  );
}

export default CatsCardList;