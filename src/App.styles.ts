import styled from 'styled-components';
import NoiseImage from './img/noise.png';
import AsylaImage from './img/asylatop.png';
import AsylaGlowImage from './img/asylatopglow.png';
import BeetleImage from './img/beetle.png';

// background and all
export const FrameStyle = styled.div`
  background-color: #1a1f27;
  background-image: url(${NoiseImage});
  flex-direction: column;
  height: 100%;
`;

export const ConentFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

export const AsylaLogo = styled.div`
  min-height: 128px;
  min-width: 162px;
  margin: 20px;
  justify-self: left;
  background-repeat: no-repeat;
  background-image: url(${AsylaImage});
  &:hover {
    background-image: url(${AsylaGlowImage});
  }
  &:active {
    transform: scale(0.95);
  }
`;
export const BeetleLogo = styled.div`
  min-height: 200px;
  min-width: 200px;
  margin: 20px;
  justify-self: left;
  background-repeat: no-repeat;
  background-image: url(${BeetleImage});
`;

// BAR FOR CARDS

export const TopBar = styled.div`
  display: flex;
  width: 100%;
  min-height: 2.5rem;
  background-color: #4978b9;
  overflow: hidden;
  border-radius: 0.7rem 0.7rem 0rem 0rem;
`;

export const TopBarText = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  text-shadow: 0rem 0rem 1rem lightblue;
`;
// CARDS

export const CardRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.7rem;
  justify-content: center;
  justify-items: center;
`;
export const AboutCard = styled.div`
  min-height: 12rem;
  min-width: 21rem;
  background-color: rgba(8, 68, 127, 0.8);
  border-radius: 0.7rem;
`;
export const FoodCard = styled.div`
  min-height: 12rem;
  min-width: 15%;
  background-color: rgba(8, 68, 127, 0.8);
  border-radius: 0.7rem;
`;
export const BitsMachine = styled.div`
  min-height: 12rem;
  min-width: 25%;
  background-color: rgba(8, 68, 127, 0.8);
  border-radius: 0.7rem;
`;

// GENERIC CARD CONTENT CONTAINER
export const GenContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 30rem;
`;
