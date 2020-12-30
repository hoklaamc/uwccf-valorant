import React from 'react';
import { TwitchEmbed } from 'react-twitch-embed';

function Stream() {
  return (
    <TwitchEmbed
      channel="DwarveSC"
      theme="dark"
      muted
      width="100%"
      withChat={false}
    />
  );
}

export default Stream;
