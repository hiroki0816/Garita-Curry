import React from "react"
import styled from 'styled-components';

const Footer = () => (
  <FooterWrap>
      <p>SPICES AND HAPPY</p>
      <h5>ガリタカリー</h5>
  </FooterWrap>
)

const FooterWrap = styled.div`
    background-color: #111;
    height: 100px;
    width: 100%;
    text-align: center;
    padding-top: 48px;
    color: #fff;
    p {
        font-size: 14px;
        letter-spacing: 0.1em;
        font-family: Avenir;
        font-weight: 900;
        margin:0;
    }
    h5 {
        font-size: 20px;
        letter-spacing: 0.1em;
        margin:0;
    }
`;

export default Footer

