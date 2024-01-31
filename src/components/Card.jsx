import React from 'react';

import style from '../scss/Card.module.scss';

const Card = ({ obj, liked, indef }) => {
  const [like, setLike] = React.useState(liked);
  const [id, setId] = React.useState('');
  const [deletId, setDeleteId] = React.useState('');
  const [delet, setDelete] = React.useState('');
  const [, setItems] = React.useState([]);

  React.useEffect(() => {
    if (id) {
      const postLike = {
        method: 'POST',
        headers: {
          'x-api-key': 'live_dMcsZPpLxILErUkue2GtcLR2g5vwrDltkzP9IwgoajiJ6xHz6ZPYa7Nq7O8fttXK',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image_id: id,
        }),
      };
      fetch('https://api.thecatapi.com/v1/favourites', postLike)
        .then((res) => {
          return res.json();
        })
        .then((arr) => setDeleteId(arr.id));
    }
  }, [id]);

  React.useEffect(() => {
    if (delet) {
      const favouriteId = delet;
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'x-api-key': 'live_dMcsZPpLxILErUkue2GtcLR2g5vwrDltkzP9IwgoajiJ6xHz6ZPYa7Nq7O8fttXK',
          'Content-Type': 'application/json',
        },
      };
      fetch(`https://api.thecatapi.com/v1/favourites/${favouriteId}`, requestOptions)
        .then((res) => {
          return res.json();
        })
        .then((arr) => setItems(arr));
    }
  }, [delet]);

  const go = () => {
    setId(obj.id);
    setLike(!like);
  };

  const deleted = () => {
    if (deletId) {
      setDelete(deletId);
      setId('');
      setLike(!like);
    } else {
      setDelete(indef.id);
      setId('');
      setLike(!like);
    }
  };

  return (
    <div className={style.Wrapper}>
      <div className={style.Shadow}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="292"
          height="292"
          viewBox="0 0 292 292"
          fill="none"
          className={style.SvgShadow}
        >
          <g filter="url(#filter0_dd_1_2024)">
            <rect x="18" y="9" width="256" height="256" fill="white" />
          </g>
          <defs>
            <filter
              id="filter0_dd_1_2024"
              x="0"
              y="0"
              width="292"
              height="292"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="9" />
              <feGaussianBlur stdDeviation="9" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2024" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="6" />
              <feGaussianBlur stdDeviation="2.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0" />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_1_2024"
                result="effect2_dropShadow_1_2024"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_1_2024"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        <div className={style.Card}>
          <div className={style.Img}>
            <img className={style.Img} src={obj.url} alt="Cat" />
            {like ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                className={style.SvgLove}
                onClick={deleted}
              >
                <g clipPath="url(#clip0_1_2180)">
                  <path
                    d="M24 42.7L21.1 40.06C10.8 30.72 4 24.56 4 17C4 10.84 8.84 6 15 6C18.48 6 21.82 7.62 24 10.18C26.18 7.62 29.52 6 33 6C39.16 6 44 10.84 44 17C44 24.56 37.2 30.72 26.9 40.08L24 42.7Z"
                    fill="#F24E1E"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_2180">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                className={style.SvgLove}
                onClick={go}
              >
                <g clipPath="url(#clip0_1_2157)">
                  <path
                    d="M33 6C29.52 6 26.18 7.62 24 10.18C21.82 7.62 18.48 6 15 6C8.84 6 4 10.84 4 17C4 24.56 10.8 30.72 21.1 40.08L24 42.7L26.9 40.06C37.2 30.72 44 24.56 44 17C44 10.84 39.16 6 33 6ZM24.2 37.1L24 37.3L23.8 37.1C14.28 28.48 8 22.78 8 17C8 13 11 10 15 10C18.08 10 21.08 11.98 22.14 14.72H25.88C26.92 11.98 29.92 10 33 10C37 10 40 13 40 17C40 22.78 33.72 28.48 24.2 37.1Z"
                    fill="#F24E1E"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_2157">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
