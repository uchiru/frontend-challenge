import React from 'react'
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
    return (
        <Container>
            {/* Роутинг */}
            <Nav>
                <NavigatedLink main="true" exact to={'/'}>
                    Все котики
                </NavigatedLink>

                <NavigatedLink main="false" exact to={'/favorite'}>
                    Любимые котики
                </NavigatedLink>
            </Nav>
        </Container>
    )
}
export default NavBar

const NavigatedLink = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    
    padding: 25px;
    text-decoration: none;
    
    height: 100%;
    font-size: 14px;
    color: #FFFFFF;
    
    &.active {
        background: #1E88E5;
    }
`
const Nav = styled.div`
    display: flex;
    height: 100%;
    margin-left: 6%;
`

const Container = styled.div`
    height: 64px;
    width: 100%;
    background: #2196F3;
`
