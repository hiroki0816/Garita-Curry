import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';
import SEO from "../components/seo"
import "../components/layout.css"
import Layout from "../components/layout"
import Menu from "../components/menu"


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
    <MenuCont>
      <Wrap>
        <Flex>
          <Menu 
            imgUrl="https://i.gyazo.com/8bb5ff25779bf6cdbdbd2a3c50a780f7.png"
            name="ガリタカリー" 
            description="まずはじめはこれ食っときゃ間違いないヨ!  スパイスを油と愛で炒めるのがコツ！"
          />
          <Menu 
            imgUrl="https://i.gyazo.com/3f00e03fc58b9ab5222ad9de72ee2279.png"
            name="バタチキカリー" 
            description="バターと生クリームとカシューナッツのなめらかさと比例して作るのがめんどくさいのが玉にキズ"
          />
          <Menu 
            imgUrl="https://i.gyazo.com/edbb8c634419c08ec5b9f27d766dbef5.png"
            name="ガリタキーマ" 
            description="ターメリックライスと目玉焼きプラスで幸せ。ちなみにガリタキーマのキーマはキーマカレーのキーマ。"
          />
          <Menu 
            imgUrl="https://i.gyazo.com/7f2a9625c527904e27d379e6f8c8bcbd.png"
            name="アチャール" 
            description="インドのお漬け物。さっぱりとした味付けでカレーのお供にピッタリ。助さん格さんくらいピッタリ。"
          />
        </Flex>
      </Wrap>
    </MenuCont>
  </Layout>
  </div>
)



const MenuCont = styled.div`
  width: 100%;
  height: auto;
`;

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

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
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