import {fetchCats} from "../../redux/asyncThunk";
import {useAppDispatch, useAppSelector} from "../../redux";
import {CatImg} from "../../CatImg";
import {useEffect, useState} from "react";
import {Cat} from "../../redux/slice";
import {getStorage} from "../../shared/utilities";

export const AllCats = () => {
    const cats = useAppSelector(state => state.toolkit.cats);
    const dispatch = useAppDispatch();
    const [storage, setStorage] = useState<string[] | null>(getStorage || null);

    useEffect(() => {
        try {
            dispatch(fetchCats());
        } catch (e) {
            console.log(e)
        }
    }, [])

    if(cats === null) return null;
    return (
        <>
            <div className="flex gap-2 flex-wrap py-6 px-16 justify-center">{cats.map((cat: Cat, index: number) => <CatImg url={cat.url} key={index} storage={storage} setStorage={setStorage} />)}</div>
        </>
    )
}