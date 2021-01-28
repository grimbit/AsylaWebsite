import React from 'react';
import { CreditsPlacement, Links } from './Credit.styles';
import {
  FaAccessibleIcon,
  FaPaintBrush,
  FaTwitter,
  FaGithub
} from 'react-icons/fa';

export const Credits = () => {
  return (
    <CreditsPlacement>
      Model Credit:
      <Links href="https://cdn.discordapp.com/emojis/797110684471001108.png?v=1">
        <FaAccessibleIcon /> Asyla{' '}
      </Links>
      <Links href="https://twitter.com/Zaxanity">
        <FaTwitter /> Zaxanity{' '}
      </Links>
      <Links href="https://grimoe.cgsociety.org/">
        <FaPaintBrush /> Grimmie{' '}
      </Links>
      Site Credit:
      <Links href="https://github.com/grimbit">
        <FaGithub /> Grimmie{' '}
      </Links>
    </CreditsPlacement>
  );
};
