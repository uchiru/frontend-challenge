import cn from "classnames";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useState} from "react";
import {getStorage} from "../shared/utilities";

export interface CatImgProps {
    url: string;
    storage: string[] | null;
    setStorage: (value: () => string[] | null) => void;
}

export const CatImg = ({ url, storage, setStorage }: CatImgProps) => {
    const [visibility, setVisibility] = useState(true);

    const addFavorite = () => {
        localStorage.setItem('favorite', JSON.stringify([...(storage || '[]'),url]));
        setStorage(getStorage)
    }

    const removeFavorite = () => {
        localStorage.setItem('favorite', JSON.stringify([...(storage || '[]')].filter(catUrl => catUrl !== url)))
        setStorage(getStorage)
    }

    return(
        <div
            className={cn("relative w-56 h-56 max-w-56 hover:w-64 hover:h-64 m-6 hover:m-2 ease-in-out duration-300")}
            onMouseOver={() => setVisibility(false)}
            onMouseOut={() => setVisibility(true)}>
            <img src={url} alt="" className={cn("absolute w-[100%] h-[100%]")}/>
            <div className={cn("absolute bottom-5 right-4 z-10", {"hidden": visibility})}>
                { storage !== null && storage.includes(url) ?
                    <FavoriteIcon color="error" style={{fontSize: '48px'}} onClick={removeFavorite}/> :
                    <FavoriteBorderIcon color="error" style={{fontSize: '48px'}} onClick={addFavorite} />
                }
            </div>
        </div>
    )
}
