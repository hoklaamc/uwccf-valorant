import React from 'react';
import { TwitchEmbed } from 'react-twitch-embed';

function Stream() {
  return <TwitchEmbed channel="DwarveSC" id="DwarveSC" theme="dark" muted />;
}

export default Stream;
