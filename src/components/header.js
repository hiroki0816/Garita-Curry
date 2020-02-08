import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';

const Header = () => (
  <Wrap>
    <LeftContent>ガリタカリー</LeftContent>
    <RightContent>
      <HeaderLink>CONCEPT</HeaderLink> 
      <HeaderLink>MENU</HeaderLink> 
      <HeaderLink>NEWS</HeaderLink> 
      <HeaderLink>ACCESS</HeaderLink> 
    </RightContent>
  </Wrap>
)

const Wrap = styled.div`
  height : 60px;
  width: 100%;
  border : 5px solid #333;
  display: flex;
  justify-content: space-between;
`;

const LeftContent = styled.a`
  display: block;
  width: 290px;
  text-align: center;
  line-height: 60px;
  font-size: 22px;
  border-right: 5px solid #333;
`;

const RightContent = styled.div`
  display: block;
  display: flex;
  padding-right: 50px;
`;

const HeaderLink = styled.a`
  display: block;
  line-height: 60px;
  padding: 0 30px;
  font-family: Avenir;
  font-weight: 900;
  letter-spacing: 0.1;
  font-size: 16px;  
  cursor: pointer;
  :hover{
    color: #EDC300;
    border-bottom: 5px solid #EDC300;
    transition: 0.3s;
  }
`;

export default Header
