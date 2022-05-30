import {CatImg} from "../../CatImg";
import {useEffect, useState} from "react";
import {getStorage} from "../../shared/utilities";

export const FavoriteCats = () => {
    const [cats, setCats] = useState<null | Array<string>>(null);
    const [storage, setStorage] = useState<string[] | null>(getStorage || null);

    useEffect(() => {
        setCats(getStorage);
    }, [storage])

    if(cats === null) return null;
    return (
        <>
            <div className="flex gap-2 flex-wrap py-6 px-16 justify-center">{cats.map((url: string, index: number) => <CatImg url={url} key={index} storage={storage} setStorage={setStorage} />)}</div>
        </>
    )
}