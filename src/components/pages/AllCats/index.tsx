import {fetchCats} from "../../redux/asyncThunk";
import {useAppDispatch, useAppSelector} from "../../redux";
import {CatImg} from "../../CatImg";
import {useEffect} from "react";
import {Cat} from "../../redux/slice";

export const AllCats = () => {
    const cats = useAppSelector(state => state.toolkit.cats);
    const dispatch = useAppDispatch();

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
            <div className="flex gap-2 flex-wrap py-6 px-16 justify-center">{cats.map((cat: Cat, index: number) => <CatImg cat={cat} key={index} />)}</div>
        </>
    )
}