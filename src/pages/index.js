import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';
import SEO from "../components/seo"
import "../components/layout.css"
import Layout from "../components/layout"
import Color from "../components/header"

const IndexPage = () => (
  <div>
  <Layout>
    <SEO title="Home" />
    <MessageCont>
      <Wrap>
        <SectionTitle>
          <h3>ガリタのつぶやき</h3>
          <div></div>
        </SectionTitle>
        <Message>
          スパイスカレーには2種類あるんだってさ。<br/>人を笑顔にするカレーかそれ以外か。<br/><br/>どうせ作るなら皆がとびっきり笑顔になれる<br/>スパイスカレーが良いよネ。<br/><br/>そんなわけで今日もアルマハウスで<br/>いっぱい作っちゃうヨ。<br/><br/>さぁみんなで一緒に食べよう！<br/>アチャールもサービスしちゃうからさ!
        </Message>
      </Wrap>
    </MessageCont>
  </Layout>
  </div>
)

const Message = styled.p`
  text-align: center;
  margin-top: 40px;
  font-size: 20px;
  letter-spacing: 0.13em;
  line-height: 41px;
`;

const SectionTitle = styled.div `
    text-align: center;
    h3 {
      color: #212121;
      font-size: 34px;
      letter-spacing: 0.1em;
      margin-bottom: 18px;
    }
    div {
      width: 160px;
      border-bottom: 4px solid #212121;
      margin: 0 auto;
    }
`;

const MessageCont = styled.div`
    background-color: #f7f7d9;
    width: 100%;
    height: auto;
`;

const Wrap = styled.div`
    margin: 0 auto;
    Width: 980px;
    padding-top: 72px;
    padding-bottom: 72px;
`;

export default IndexPage

// <h1>うおお</h1>
// <p>はじめてのギャッツビー.</p>
// <p>あ</p>
// <p>Now go build something great.</p>

// <Link to="/blog/">ブログ見てね</Link>
// <Link to="/blog2/">こっちもブログやねん</Link>
// style={{
//   
// }}