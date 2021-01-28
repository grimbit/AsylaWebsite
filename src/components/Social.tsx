import React from 'react';
import { SocialRow, SocialIcon } from './Social.styles';
import { FaTwitterSquare, FaInstagram, FaYoutube } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';

export const ListSocial = () => {
  return (
    <SocialRow>
      <SocialIcon href="https://twitter.com/asylatv">
        <FaTwitterSquare /> Twitter
      </SocialIcon>
      <SocialIcon href="https://www.tiktok.com/@asylavt?">
        <SiTiktok /> Tiktok
      </SocialIcon>
      <SocialIcon href="https://instagram.com/asylavt">
        <FaInstagram /> Instagram
      </SocialIcon>
      <SocialIcon href="https://www.youtube.com/channel/UC3J61HoOFR4bUsvBa9EKtbQ">
        <FaYoutube /> Youtube
      </SocialIcon>
      <SocialIcon href="asylaVT@gmail.com">
        <FiMail /> Email
      </SocialIcon>
    </SocialRow>
  );
};
