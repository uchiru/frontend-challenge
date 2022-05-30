import "../App.css";
import React, { useEffect, useContext } from "react";
import { Context } from "../context/context";
import CatCard from "./CatCard";
function AllCats() {
    const { cats, getCats } = useContext(Context);

    // бесшовный скролл
    useEffect(() => {
        document.addEventListener("scroll", scrollHandler);
        return function () {
            document.removeEventListener("scroll", scrollHandler);
        };
    }, []);
    const scrollHandler = (e) => {
        if (
            e.target.documentElement.scrollHeight -
            (e.target.documentElement.scrollTop + window.innerHeight) < 0) {
            getCats();
        }
    };

    return (
        <div className="AllCats-container">
            <CatCard cats={cats} />
            <div>...загружаем еще котиков...</div> 
        </div>
    );
}

export default AllCats;
