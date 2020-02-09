import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';
import SEO from "../components/seo"
import "../components/layout.css"
import Layout from "../components/layout"
import Menu from "../components/menu"
import Footer from "../components/footer"

const IndexPage = () => (
  <div>
  <Layout>
    <SEO title="Home" />
    <TopContent>
      <TopText>
        <h1>SPICES<br/>AND<br/>HAPPY</h1>
        <div></div>
        <p>スパイスから生まれる笑顔<br/>最高なんだよネ。</p>
      </TopText>
    </TopContent>
    <YellowCont>
      <Wrap>
        <SectionTitle>
          <h3>ガリタのつぶやき</h3>
          <div></div>
          <img src="https://i.gyazo.com/e2d0e9a5bd0ae3e60a69eef854198ace.png"/>
        </SectionTitle>
        <Message>
          スパイスカレーには2種類あるんだってさ。<br/>人を笑顔にするカレーかそれ以外か。<br/><br/>どうせ作るなら皆がとびっきり笑顔になれる<br/>スパイスカレーが良いよネ。<br/><br/>そんなわけで今日もアルマハウスで<br/>いっぱい作っちゃうヨ。<br/><br/>さぁみんなで一緒に食べよう！<br/>アチャールもサービスしちゃうからさ!
          <img src="https://i.gyazo.com/e2d0e9a5bd0ae3e60a69eef854198ace.png"/>
        </Message>
      </Wrap>
    </YellowCont>
    <NormalCont>
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
    </NormalCont>
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
    <NormalCont>
      <Wrap>
      <SectionTitle>
            <h3>ガリタからのお知らせ</h3>
            <div></div>
        </SectionTitle>
      </Wrap>
    </NormalCont>
    <YellowCont>
      <Flex>
        <AccessLeft>
          <img src="https://i.gyazo.com/b5d0ddf76ad3e66141318dc2b0a45d77.png"/>
        </AccessLeft>
        <AccessRight>
          <AccessTitle>
              <h3>ガリタカリー情報</h3>
              <div></div>
          </AccessTitle>
          <p>〒153-0064<br/>東京都目黒区下目黒 5-4-1<br/>下目黒ハウス303<br/><br/>0124-73-1165<br/><br/>不定休</p>
        </AccessRight>
      </Flex>
    </YellowCont>
    <Footer/>
  </Layout>
  </div>
)

const TopText = styled.div`
  z-index: 888;
  position: absolute;
  top: 21%;
  left: 6%;
  h1 {
    font-size: 80px;
    letter-spacing: 0.2em;
    font-family: Avenir;
    font-weight: 600;
    line-height: 100px;
    margin: 0;
  }
  div {
    margin: 20px 0;
    width: 70px;
    border-bottom: 6px solid #212121;
  }
  p {
    font-size: 22px;
    letter-spacing: 0.2em;
  }
`;

const TopContent = styled.div`
  width: 100%;
  height: 88vh;
  position: relative;
  background: url(https://i.gyazo.com/297af40444b26c24503f1375cef1fe07.jpg);
  background-repeat: no-repeat;
  background-size: cover;
`;

const AccessTitle = styled.div `
    margin-top: 44px;
    margin-left: 40px;
    text-align: left;
    h3 {
      color: #212121;
      font-size: 26px;
      letter-spacing: 0.1em;
      margin-bottom: 12px;
    }
    div {
      width: 90px;
      border-bottom: 3px solid #212121;
    }
`;

const AccessLeft = styled.div`
  width: 50%;
  height: 420px;
  object-fit: cover;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const AccessRight = styled.div`
  width: 50%;
  height: 420px;
  p {
    margin-left: 40px;
    font-size: 18px;
    letter-spacing: 0.13em;
    line-height: 36px;
  }
`;


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

const NormalCont = styled.div`
  width: 100%;
  height: auto;
`;

const Message = styled.p`
  text-align: center;
  margin-top: 40px;
  font-size: 20px;
  letter-spacing: 0.13em;
  line-height: 41px;
  position: relative;
  img {
    position: absolute;
    bottom: -85px;
    right: 10px;
    width: 160px;
    height: auto;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-duration: 1.5s;
    animation-name: anim_s;
    transform: rotate(30deg);
    animation-duration: 2s;
    @keyframes anim_s {
          50% {
              transform: rotate(-20deg);
          }
          100% {
              transform: rotate(20deg);
          }
      }
  }
`;

const SectionTitle = styled.div `
    text-align: center;
    position: relative;
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
    img {
      position: absolute;
      top: -80px;
      left: 10px;
      width: 160px;
      height: auto;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
      animation-direction: alternate;
      animation-duration: 1.5s;
      animation-name: anim_s;
      transform: rotate(30deg);
      animation-duration: 4s;
      @keyframes anim_s {
            50% {
                transform: rotate(-20deg);
            }
            100% {
                transform: rotate(20deg);
            }
        }
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