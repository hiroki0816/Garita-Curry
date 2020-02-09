import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';
import Ornament from '../images/header_ornament.png'

const Header = () => (
  <Wrap>
    <LeftContent href="/">ガリタカリー</LeftContent>
    <RightContent>
      <ul>
        <li><a href="/">CONCEPT</a> </li>
        <li><a>MENU</a> </li>
        <li><a>NEWS</a> </li>
        <li><a>ACCESS</a> </li>
      </ul>
    </RightContent>
  </Wrap>
)

const Color = {
  black: "#333",
  yellow: "#EDC300",
  brown: "#F7F7D9",
}

const Wrap = styled.div`
  height : 60px;
  width: 100%;
  border : 5px solid ${Color.black};
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  background-color: white;
`;

const LeftContent = styled.a`
  color: ${Color.black};
  cursor: pointer;
  text-decoration: none;
  display: block;
  width: 290px;
  text-align: center;
  line-height: 60px;
  font-size: 22px;
  border-right: 5px solid ${Color.black};
`;

const RightContent = styled.div`
  display: block;
  display: flex;
  padding-right: 50px;
  ul {
    margin: 0;
  }
  li {
    display: inline-block;  
    position: relative;
    width: 120px;
    text-align: center;
  }
  li:before {
    content: '';
    display: inline-block;
    width: 38px;
    height: 10px;
    position: absolute;
    top: 75px;
    left: 35%;
    background-image: url(${Ornament});
    background-size: contain;
    vertical-align: middle;
    background-repeat: no-repeat;
  }
  a {
    color: ${Color.black};
    display: block;
    line-height: 60px;
    font-family: Avenir;
    font-weight: 900;
    letter-spacing: 0.1;
    font-size: 16px;  
    cursor: pointer;
    text-decoration: none;
    border-bottom: 5px solid ${Color.black};
    :hover{
    color: #EDC300;
    border-bottom: 5px solid ${Color.yellow};
    transition: 0.3s;
    }
  }
`;



export default Header
