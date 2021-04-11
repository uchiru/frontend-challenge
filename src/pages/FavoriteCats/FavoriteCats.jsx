import React from 'react'
import PropTypes from 'prop-types';
import Card from "../../components/Card/Card";
import styled from "styled-components";

const FavoriteCats = ({favoriteCats, deleteFavorite}) => {
    return (
        // Flex контейнер
        <Container>
            <CardsContainer>
                {/*Выводим котов на страницу*/}
                {
                    favoriteCats.map(cat => {
                        return <Card
                            onClick={() => deleteFavorite(cat)}
                            src={cat.url}
                            key={cat.id}
                            isClicked={true}
                        />
                    })
                }
            </CardsContainer>
        </Container>
    )
}
export default FavoriteCats

FavoriteCats.propTypes = {
    favoriteCats: PropTypes.array,
    deleteFavorite: PropTypes.func,
}

const Container = styled.div`
    display: flex;
`

const CardsContainer = styled.div`
    margin: 48px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 48px;
    
    @media (max-width: 1400px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 30px;
    }
    @media (max-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-gap: 40px;
    }
`

