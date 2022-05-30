import {Cat} from "../../redux/slice";
import {CatImg} from "../../CatImg";
import {useEffect, useState} from "react";

export const FavoriteCats = () => {
    const [cats, setCats] = useState<null | string>(null);

    useEffect(() => {
        setCats(localStorage.getItem("favorite"));
    }, [])

    console.log(cats)

    if(cats === null) return null;
    return (
        <>
            <img src={cats} alt=""/>
            {/*<div className="flex gap-2 flex-wrap py-6 px-16 justify-center">{cats.map((cat: Cat, index: number) => <CatImg cat={cat} key={index} />)}</div>*/}
        </>
    )
}