import { useSelector, useDispatch } from "react-redux"
import { catsLike } from "redux/cats/cats-action"
import { useState } from "react"
import { Image, Empty } from "antd"
import '../MyCats/MyCats.css';
import { HeartSvg, HeartSvgFalse } from '../../utils/icon'
import Icon, { HeartTwoTone } from '@ant-design/icons';
const MyCats = () => {
    const myCats = useSelector(store=> store.cats.cats)
    const dispatch = useDispatch()
    const [like, setLike] = useState('');
    const toggle = ({url, id, like}) => {
        let newLike = {
            url,
            like: !like,
            id
        }
        dispatch(catsLike(newLike))
        setLike(!like)
    };
    console.log(myCats)
    return (
       <ul className="mycats__wrapper">
       {myCats ?
          myCats.filter(el=>el.like === true).map(({ url, id, like }) => (
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
          )): "<Empty/>"}
       </ul>
    )
}
export default MyCats