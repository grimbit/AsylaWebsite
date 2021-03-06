import styled from 'styled-components';
// background and all
export const SocialRow = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-direction: row;
`;

export const SocialIcon = styled.a`
  text-decoration: none;
  font-weight: bold;
  transition: 0.1s;
  color: yellow;
  margin-left: 0.625rem;
  transition: transform 0.2s;

  &:hover {
    text-shadow: 0rem 0rem 1rem red;
    transform: scale(1.2);
    color: red;
  }
  &:active {
    transform: scale(0.95);
  }
`;
