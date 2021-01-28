import styled from 'styled-components';
// background and all
export const CreditsPlacement = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 0.8rem;
`;

export const Links = styled.a`
  text-decoration: none;
  transition: 0.1s;
  color: yellow;
  margin-left: 0.625rem;
  transition: transform 0.2s;
  font-weight: lighter;

  &:hover {
    text-shadow: 0rem 0rem 1rem red;
    transform: scale(1.2);
    color: red;
  }
  &:active {
    transform: scale(0.95);
  }
`;
