import React, {useState} from 'react'
import {Route, Switch} from "react-router-dom";
import AllCats from "./pages/AllCats/AllCats";
import FavoriteCats from "./pages/FavoriteCats/FavoriteCats";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import NavBar from "./components/NavBar/NavBar";

function App() {
    // Массив любимых котов
    const [favoriteCats, setFavoriteCats] = useState([])

    // Добавление кота в массив любимых по ID
    const addToFavorite = (card) => {
        if (favoriteCats.every(el => el.id !== card.id)) {
            setFavoriteCats( prevState => [...prevState, card])
        }
    }

    // Удаление из массива любимых
    const deleteFavorite = (card) => {
        const newState = favoriteCats.filter(el => el.id !== card.id)
        setFavoriteCats(newState)
    }

    return (
        <>
            <NavBar />
            <Switch>
                <Route path={'/'} exact render={() => <AllCats
                        addToFavorite={addToFavorite}
                    />}
                />
                <Route path={'/favorite'} exact render={() => <FavoriteCats
                        deleteFavorite={deleteFavorite}
                        favoriteCats={favoriteCats}
                    />}
                />
                <Route path={'*'} component={NotFoundPage} />
            </Switch>
        </>
    );
}

export default App;
