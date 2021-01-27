import React from 'react';
import {
  FrameStyle,
  AsylaLogo,
  ConentFrame,
  CardRow,
  AboutCard,
  FoodCard,
  BitsMachine,
  Shop,
  BeetleLogo
} from './App.styles';
import { Main } from './components/Main';
import { Link } from 'react-scroll';
import { Rules } from './components/Rules';

// const Specs = ['GTX 1080', 'Intel i7-6700k ', '32 GB RAM', 'Windows 10'];

function App() {
  return (
    <FrameStyle>
      <ConentFrame>
        <Link activeClass="active" to="Main" spy={true} smooth={true}>
          <AsylaLogo />
        </Link>
        <BeetleLogo />
      </ConentFrame>
      <ConentFrame id="Main">
        <Main />
      </ConentFrame>
      <CardRow>
        <AboutCard>
          <Rules />
        </AboutCard>
        <FoodCard></FoodCard>
        <BitsMachine></BitsMachine>
      </CardRow>
      <Shop>SHOPPU</Shop>
    </FrameStyle>
  );
}

export default App;
