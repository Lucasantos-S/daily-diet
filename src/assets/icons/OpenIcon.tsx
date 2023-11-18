import React from 'react';
import { SvgXml } from 'react-native-svg';
import { Props } from './Icons.structure';

const xml = `<svg width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.5303 5.46967C18.8232 5.76256 18.8232 6.23744 18.5303 6.53033L6.53033 18.5303C6.23744 18.8232 5.76256 18.8232 5.46967 18.5303C5.17678 18.2374 5.17678 17.7626 5.46967 17.4697L17.4697 5.46967C17.7626 5.17678 18.2374 5.17678 18.5303 5.46967Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 6C7.5 5.58579 7.83579 5.25 8.25 5.25H18C18.4142 5.25 18.75 5.58579 18.75 6V15.75C18.75 16.1642 18.4142 16.5 18 16.5C17.5858 16.5 17.25 16.1642 17.25 15.75V6.75H8.25C7.83579 6.75 7.5 6.41421 7.5 6Z"/>
</svg>

`;

export default function OpenIcon({ color }: Props) {
  return <SvgXml xml={xml} fill={color} />;
}
