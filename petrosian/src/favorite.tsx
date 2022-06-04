import { Card, CardMedia, CardActions, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getFromLocalStorage, setToLocalStorage } from './services/localStorage';
import FavoriteIcon from '@mui/icons-material/Favorite';


interface IFavorite { }

const Favorite: React.FC<IFavorite> = () => {
    const [card, setCard] = useState([])
    const fav = () => {
        return getFromLocalStorage('favorite')
    }
    useEffect(() => {
        fav() && setCard(fav().filter((word: any) => word.length > 0))
    }, [])
    const hanleFavoriteRemove = (url: any) => {
        setCard(card.filter((w) => w != url));
        setToLocalStorage(card, 'favorite')
    }

    return <>
        <h1>favorite</h1>
        <div className="gallery">
            {card.length > 0 &&
                card.map(url => (
                    <div className="imagePlaceholder" key={url}>
                        <Card className='card'>
                            <CardMedia
                            >
                                <img className='image' src={url} alt="Cat" />
                            </CardMedia>
                            <CardActions disableSpacing className='action' >
                                <IconButton
                                    aria-label="add to favorites"
                                    onClick={() => hanleFavoriteRemove(url)}
                                >
                                    <FavoriteIcon className='icon' />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </div>
                ))}
        </div>
    </>;
};

export default Favorite;