import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon, { HeartTwoTone } from '@ant-design/icons';
import { fetchCatsGet } from '../../redux/cats/cats-operation';
import React, { useState } from 'react';
import '../Cats/Cats.css';
import { Image, Empty, message,  } from 'antd';
import ButtonLoad from 'components/ButtonLoad/ButtonLoad';
import { catsLike } from '../../redux/cats/cats-action';
import { HeartSvg, HeartSvgFalse } from '../../utils/icon';

const Cats = () => {
  const dispatch = useDispatch();
  const catsList = useSelector(store => store.cats.cats);
  const [page, setPage] = useState(1);
  const [visible, setVisible] = useState(false);
  const [like, setLike] = useState(false);

  const toggle = ({ url, id, like }) => {
    let newLike = {
      url,
      like: !like,
      id,
    };
    dispatch(catsLike(newLike));
    setLike(!like);
    message.success('Котик добавлен в избранное');
  };

  useEffect(() => {
    if (page === 1) {
      if (catsList.length >= 0) {
        dispatch(fetchCatsGet(page));
      }
    } else {
      dispatch(fetchCatsGet(page));
    }

    if (catsList.length > 15) {
      dispatch(fetchCatsGet(page));
    }
    // if (page === 1) {
    //   dispatch(fetchCatsGet(page));
    // }
    //     if(catsList.length > 15 && !like){
    //         console.log("da")
    //         dispatch(fetchCatsGet(page));
    //     }
  }, [page]);
  const loadMore = () => {
    console.log('pol');
    setPage(page + 1);
  };
  return (
    <div>
      <ul className="cats__list">
        {catsList
          ? catsList.map(({ url, id, like }) => (
              <>
                <li className="cats__item" key={id}>
                  
                  <Image width={225} height={225} src={url} key={id} />

                  <button
                    className="cats__btnLike"
                    type="button"
                    onClick={() => toggle({ url, id, like })}
                  >
                    {like === false ? (
                      <Icon
                        className="cats__likeIcon"
                        component={HeartSvgFalse}
                      />
                    ) : (
                      <Icon className="cats__likeIcon" component={HeartSvg} />
                    )}
                  </button>
                </li>
              </>
            ))
          : 'ull'}
      </ul>
      <ButtonLoad loadMore={loadMore} />
    </div>
  );
};
export default Cats;
