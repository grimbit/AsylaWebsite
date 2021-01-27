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

// CARDS

export const BulletPoint = styled.div`
  color: yellow;
`;
export const CardRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
export const AboutCard = styled.div`
  min-height: 400px;
  min-width: 25%;
  background-color: rgba(8, 68, 127, 0.8);
  border-radius: 10px;
`;
export const FoodCard = styled.div`
  min-height: 400px;
  min-width: 25%;
  background-color: rgba(8, 68, 127, 0.8);
  border-radius: 10px;
`;
export const BitsMachine = styled.div`
  min-height: 400px;
  min-width: 25%;
  background-color: rgba(8, 68, 127, 0.8);
  border-radius: 10px;
`;

export const Shop = styled.div`
  align-self: center;
  min-height: 400px;
  max-width: 400px;
  margin-top: 15px;
  background-color: rgba(8, 68, 127, 0.4);
  border-radius: 10px;
`;
