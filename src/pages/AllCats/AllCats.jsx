import React, {useCallback, useEffect, useRef, useState} from 'react'
import fetchCats from "../../api/catsAPI";
import styled from "styled-components";
import PropTypes from 'prop-types';
import Card from "../../components/Card/Card";

const AllCats = ({addToFavorite}) => {
    const [cats, setCats] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(1)
    const observer = useRef()

    const lastElem = useCallback(node => {
        // если загрузка активна, выходим
        if (isLoading) return

        //Если есть за кем наблюдать - отключаем объект IntersectionObserver от наблюдения цели.
        if (observer.current) observer.current.disconnect()

        observer.current = new IntersectionObserver(entries => {
            // Проверка дошли до элемента наблюдения или нет
            if (entries[0].isIntersecting) {
                // Если дошли то обновляем страницу для загрузки
                setPage(prevState => prevState + 1)
            }
        }, [])

        // Сообщаем объекту IntersectionObserver элемент для наблюдения.
        if (node) observer.current.observe(node)
    })

    // Загрузка картинок при обновлении страницы
    useEffect(() => {
        setIsLoading(true)

        // Загружаем массив котиков
        fetchCats(page, 10).then(res => {
            setCats(prevState => [...prevState, ...res])

            setIsLoading(false)
        })
    }, [page])


    return (
        // Flex контейнер
        <Container>
            <CardsContainer>
                {/*Вывод котов на страницу*/}
                {
                    cats.map((cat,index) => {
                        // Уникальное Ид для кота, не стал использовать UUId
                        const date = new Date()
                        const uniqId = cat.id + date + index

                        return <Card
                            id={uniqId}
                            onClick={addToFavorite}
                            src={cat.url}
                            key={uniqId}
                            isClicked={false}
                        />
                    })
                }
            </CardsContainer>
            {/*Вывод лоадера при загрузке */}
            {
                isLoading ? <Loader>... загружаем еще котиков ...</Loader> : null
            }
            {/*Якорь для бесконечного скрола */}
            <div ref={lastElem} ></div>
        </Container>
    )
}
export default AllCats

AllCats.propTypes = {
    addToFavorite: PropTypes.func,
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const Loader = styled.div`
    margin: 0px auto;
    width: 1000px;
    display: flex;
    justify-content: center;
`

const CardsContainer = styled.div`
    min-height: 400px;
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

