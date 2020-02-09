import React from "react"
import styled from 'styled-components';

const Menu = (props) => (
    <MenuCard>
        <MenuImg>
            <img src={props.imgUrl}/>
            <div>{props.name}</div>
        </MenuImg>
        <p>{props.description}</p>
    </MenuCard>
  )

const MenuCard = styled.div`
    width: 48%;
    min-Width: 330px;
    margin: 20px 0;
    p {
        margin: 6px 0;
        letter-spacing: 0.1em;
        line-height: 26px;
    }
`;

const MenuImg = styled.div`
    width: 100%;
    height: auto;
    position: relative;
    img {
        width: 100%;
        object-fit: cover;
    }
    div {
        position: absolute;
        bottom: 20px;
        left: 14px;
        background-color: white;
        padding: 3px 6px;
    }
`;

export default Menu