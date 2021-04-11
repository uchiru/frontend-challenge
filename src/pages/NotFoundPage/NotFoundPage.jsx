import React from 'react'
import styled from "styled-components";

const NotFoundPage = () => {
    return (
        <Container>
            <Title>404</Title>
            <Subtitle>Page not found :3</Subtitle>
        </Container>
    )
}

export default NotFoundPage

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh
`

const Title = styled.h1`
    font-size: 300px;
    line-height: 240px;
    color: #2196F3;
`

const Subtitle = styled.p`
    font-size: 30px;
`
