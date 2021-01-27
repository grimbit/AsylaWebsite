import React from 'react';
import { Frame } from './Main.styles';
import { TwitchEmbed } from 'react-twitch-embed';

export const Main = () => {
  return (
    <Frame>
      <TwitchEmbed
        channel="asylatv"
        id="asylatv"
        theme="dark"
        width="100%"
        height="100%"
        muted
        onVideoPause={() => console.log(';_;')}
      />
    </Frame>
  );
};
