import React from 'react';
import { TwitchEmbed } from 'react-twitch-embed';

function Stream() {
  return <TwitchEmbed channel="dwarvesc" id="dwarvesc" theme="dark" muted />;
}

export default Stream;
