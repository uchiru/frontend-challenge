import React, { useEffect, useState } from 'react';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Card, CardActions, CardMedia, IconButton } from '@mui/material';
import { setToLocalStorage } from './services/localStorage';

interface IGallary { }

const Gallary: React.FC<IGallary> = () => {
    const [favorite, setFavorite] = useState([''])
    const [load, setLoad] = useState('loading...')
    const [state, setState] = useState({
        images: [{
            id: '',
            url: ''
        }],
        page: 0,
        limit: 15,
        status: load
    })

    const loadMore = () => {
        fetch(
            `https://api.thecatapi.com/v1/images/search?limit=${state.limit
            }&page=${state.page}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": "4bebae0d-0ec4-4787-8e77-8602741525af"
                }
            }
        )
            .then(data => data.json())
            .then(data => {
                setState({
                    images: [
                        ...state.images,
                        ...data.map((e: any) => ({ id: e.id, url: e.url }))
                    ],
                    page: state.page + 1,
                    limit: state.page,
                    status: state.status
                });
            });
    }

    const getRandomCat = () => {
        setLoad('loading...')
        fetch(
            `https://api.thecatapi.com/v1/images/search?limit=${state.limit
            }&page=${state.page}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": "4bebae0d-0ec4-4787-8e77-8602741525af"
                }
            }
        )
            .then(data => data.json())
            .then(data => {
                setState({
                    images: data.map((e: any) => ({ id: e.id, url: e.url })),
                    page: state.page,
                    limit: state.limit,
                    status: 'ok'
                });
            })
    };
    useEffect(() => {
        getRandomCat()
    }, [])
    const hanleFavoriteAdd = (img: any) => {
        setFavorite((prev: string[]) => [...prev, img.url])
        setToLocalStorage(favorite.filter((word: any) => word.length > 0), 'favorite')
    }
    console.log(favorite);

    return (
        <div>
            {state.status !== 'ok' ?
                <div>Loading...</div> :
                <div className="gallery">
                    {state.images.length > 0 &&
                        state.images.map(image => (
                            <div className="imagePlaceholder" key={image.id}>
                                <Card className='card'>
                                    <CardMedia
                                    >
                                        <img className='image' src={image.url} alt="Cat" />
                                    </CardMedia>
                                    <CardActions disableSpacing className='action' >
                                        <IconButton
                                            aria-label="add to favorites"
                                            onClick={() => hanleFavoriteAdd(image)}
                                        >
                                            <FavoriteBorderIcon className='icon' />
                                        </IconButton>
                                    </CardActions>
                                </Card>
                            </div>
                        ))}
                </div>
            }
            <button onClick={loadMore}>Загрузить еще котиков</button>
        </div>
    );
};

export default Gallary;