import React, { useState } from 'react';

interface IRandom { }

const STATUS_FETCHING = "fetching";
const STATUS_FETCHED = "fetched";
const Random: React.FC<IRandom> = () => {
    const [state, setState] = useState({
        image: null,
        loadingState: STATUS_FETCHING,
        id: 1
    })

    const fetchRandomCat = () => {
        fetch("https://api.thecatapi.com/v1/images/search", {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "4bebae0d-0ec4-4787-8e77-8602741525af"
            }
        })
            .then(data => data.json())
            .then(data => {
                const { url } = data[0];
                setState({ image: url, loadingState: STATUS_FETCHED, id: ++state.id });
            });
    };
    // console.log(state.id);

    return (
        <div>
            <div>
                <button onClick={fetchRandomCat}>Get random cat!</button>
            </div>
            {state.image &&
                <img src={state.image} alt="" />
            }
        </div>);
};

export default Random;