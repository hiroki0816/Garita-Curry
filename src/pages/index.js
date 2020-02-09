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
    <YellowCont>
      <Wrap>
        <SectionTitle>
          <h3>ガリタのつぶやき</h3>
          <div></div>
        </SectionTitle>
        <Message>
          スパイスカレーには2種類あるんだってさ。<br/>人を笑顔にするカレーかそれ以外か。<br/><br/>どうせ作るなら皆がとびっきり笑顔になれる<br/>スパイスカレーが良いよネ。<br/><br/>そんなわけで今日もアルマハウスで<br/>いっぱい作っちゃうヨ。<br/><br/>さぁみんなで一緒に食べよう！<br/>アチャールもサービスしちゃうからさ!
        </Message>
      </Wrap>
    </YellowCont>
    <MenuCont>
      <Wrap>
        <MenuTitle>
          <p>献立</p>
          <h2>スパイスカレーお品書き</h2>
        </MenuTitle>
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
    <YellowCont>
      <Wrap>
        <SectionTitle>
            <h3>ガリタカリーの常連さん</h3>
            <div></div>
        </SectionTitle>
        <Carousel>
          <li>
            <img src="https://i.gyazo.com/291b8693d79fba26b9fccd4a5f858824.png"/>
            <p>二郎を超えた。<br/>そう思わせてくれた初めての食べ物。</p>
            <p>ー YOKINIST</p>
          </li>
          <li>
            <img src="https://i.gyazo.com/0665991d738d25106a203384c66b75e7.png"/>
            <p>もう戻れませんよ。<br/>こんな世界を知ってしまったらね。</p>
            <p>ー GREATEST</p>
          </li>
          <li>
            <img src="https://i.gyazo.com/6869995a64057d6f42e3e8fc755bd0f2.png"/>
            <p>ご飯は10号炊きます。<br/>それが誠意を示すということ。</p>
            <p>ー KENJI</p>
          </li>
          <li>
            <img src="https://i.gyazo.com/83a40c6ca85bddf6fb97bbabe54977f0.png"/>
            <p>カレーかラップかどっちが好きって？<br/>そんなの愛に決まってるだろ。</p>
            <p>ー TAKAKACKS</p>
          </li>
          <li>
            <img src="https://i.gyazo.com/d02f93bcfeeafd534a1a2e311b4532a3.png"/>
            <p>皆まで言うな。<br/>美味であることは揺るがないさ。</p>
            <p>ー BOB</p>
          </li>
          <li>
            <img src="https://i.gyazo.com/c9f0b8013efea4ba255f7ba1c50200c2.png"/>
            <p>よくここまで頑張ったね。<br/>あなたは私の誇りよ。</p>
            <p>ー UNKNOWN</p>
          </li>
          <li></li>
        </Carousel>
      </Wrap>
    </YellowCont>
  </Layout>
  </div>
)

const Carousel = styled.ul`
  width:1300px;
  padding:12px 0;
  margin-top: 48px;
  overflow-x:scroll;
  -webkit-overflow-scrolling:touch;
  overflow-scrolling:touch;
  white-space:nowrap;
  li { 
    background: #f7f7d9;
    margin: 14px;
    text-align: center;
    width: 360px;
    display: inline-block;
    p {
      text-align: left;
      font-size: 17px;
      letter-spacing: 0.07em;
      line-height: 30px;
      margin: 7px 0;
    }
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 5px;
    }
  }
`;

const MenuTitle = styled.div`
  margin-bottom: 26px;
  p {
    width: 54px;
    padding: 5px 14px;
    font-size: 24px;
    margin: 0;
    border-top : 4px solid #333;
    border-left : 4px solid #333;
    border-right : 4px solid #333;
    letter-spacing: 0.07em;
  }
  h2 {
    display: inline-block;
    padding: 5px 14px;
    margin: 0;
    font-size: 32px;
    border : 4px solid #333;
    letter-spacing: 0.1em;
  }
`;

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

const YellowCont = styled.div`
    background-color: #f7f7d9;
    width: 100%;
    height: auto;
    overflow: hidden;
`;

const Wrap = styled.div`
    margin: 0 auto;
    max-Width: 980px;
    padding: 82px 16px;
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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