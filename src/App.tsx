import React from 'react';
import {
  FrameStyle,
  AsylaLogo,
  ConentFrame,
  CardRow,
  AboutCard,
  FoodCard,
  BitsMachine,
  BeetleLogo,
  TopBar,
  TopBarText,
  GenContainer
} from './App.styles';
import { Main } from './components/Main';
import { Link } from 'react-scroll';
import { ListRules } from './components/Rules';
import { ListSupport } from './components/Support';
import { About } from './components/About';
import { ListSocial } from './components/Social';
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
        <ListSocial />
      </ConentFrame>

      <CardRow>
        <AboutCard>
          <TopBar>
            <TopBarText>Rules</TopBarText>
          </TopBar>
          <ListRules />
        </AboutCard>
        <FoodCard>
          <TopBar>
            <TopBarText>Support</TopBarText>
          </TopBar>
          <ListSupport />
        </FoodCard>
        <BitsMachine>
          <TopBar>
            <TopBarText>About</TopBarText>
          </TopBar>
          <GenContainer>
            <About />
          </GenContainer>
        </BitsMachine>
      </CardRow>
    </FrameStyle>
  );
}

export default App;
