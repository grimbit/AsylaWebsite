import React from 'react';
import { SocialRow } from './Social.styles';
import { FaTwitterSquare } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
export const ListSocial = () => {
  return (
    <SocialRow>
      <FaTwitterSquare /> Twitter/ <SiTiktok /> Tiktok
    </SocialRow>
  );
};
