import cn from "classnames";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {useState} from "react";
import {Cat} from "../redux/slice";

export interface CatImgProps {
    cat: Cat;
}

export const CatImg = ({ cat }: CatImgProps) => {
    const [visibility, setVisibility] = useState(true);

    const handleClick = () => {
        console.log(cat.url)
        localStorage.setItem('favorite', cat.url);
        console.log(localStorage.getItem("favorite"))
    }

    return(
        <div
            className={cn("relative w-56 h-56 max-w-56 hover:w-64 hover:h-64 m-6 hover:m-2 ease-in-out duration-300")}
            onMouseOver={() => setVisibility(false)}
            onMouseOut={() => setVisibility(true)}>
            <img src={cat.url} alt="" className={cn("absolute w-[100%] h-[100%]")}/>
            <div className={cn("absolute bottom-5 right-4 z-10", {"hidden": visibility})} onClick={handleClick}>
            <FavoriteBorderIcon color="error" style={{fontSize: '48px'}}/>
            </div>
        </div>
    )
}
