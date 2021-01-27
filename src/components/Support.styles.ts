import styled from 'styled-components';
// background and all
export const SupportDotFrame = styled.div`
  color: white;
  text-shadow: 0rem 0rem 0.2rem lightblue;
`;
export const RuleText = styled.a`
  color: #7adeff;
  margin-left: 0.3rem;
  text-decoration: none;
  transition: transform 0.2s;
  font-weight: bold;
  transition: 0.1s;
  &:hover {
    transform: scale(1.1);
    color: white;
    margin-left: 0.4rem;
  }
  &:active {
    transform: scale(0.95);
  }
`;

export const RuleFrame = styled.li`
  display: flex;
  flex-direction: column;
  margin-left: 0.625rem;
  margin-top: 0.625rem;
`;
export const Inline = styled.div`
  display: inline-flex;
`;
