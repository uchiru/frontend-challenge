import React, {useState} from 'react'
import styled from "styled-components";
import PropTypes from 'prop-types';
import staticHeartSvg from '../../img/VectorStaticHeart.png'
import hoverHeartSvg from '../../img/VectorHoveredHeart.png'
import clickedHeartSvg from '../../img/VectorClickedHeart.png'

const Card = ({onClick, src, isClicked, id}) => {
    const [clickedHeart, setClickedHeart] = useState(isClicked)
    const [isOnHoverCard, setIsOnHoverCard] = useState(false);

    return (
        <CatImgCard
            isOnHover={isOnHoverCard}
            onMouseEnter={() => setIsOnHoverCard(true)}
            onMouseLeave={() => setIsOnHoverCard(false)}
            src={src}
        >
            {/*Если наводим на карточку, то только тогда показываем ЛАЙК */}
            {
                isOnHoverCard
                    ? <Like
                        clicked={clickedHeart}
                        onClick={()=> {
                            setClickedHeart(true)
                            onClick(id)
                        }}
                    />
                    : null
            }
        </CatImgCard>
    )
}
export default React.memo(Card)

Card.propsType = {
    onClick: PropTypes.func,
    src: PropTypes.string,
    isClicked: PropTypes.bool,
}

const CatImgCard = styled.div.attrs(props => ({
    style: {
        backgroundImage: `url(${props.src})`,
    }
}))`
    position: relative;
    width: 225px;
    height: 225px;
    padding:0px;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
    transition: 1s;

    &:hover {
        transform: scale(1.1389, 1.1389);
        box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.24), 0px 9px 18px rgba(0, 0, 0, 0.18);
    }
`

const Like = styled.div`
    z-index: 100;
    width: 48px;
    height: 48px;
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    bottom: 30px;
    right: 30px;    
    background-image: url('${(props) => props.clicked ? clickedHeartSvg : staticHeartSvg}');
    
    &:hover {
        background-image: url('${hoverHeartSvg}');
    }    
    
    &.active {
        background-image: url('${clickedHeartSvg}');
    }
`
