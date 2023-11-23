import React from 'react';
import { IIconProps, IIcons } from './Icons.structure';

import Logo from './Logo';
import OpenIcon from './OpenIcon';
import PositiveIcon from './PositveIcon';
import NegativeIcon from './NegativeIcon';

/**
 * @description Component to render all svg icons
 * @example ````tsx
 * <Icons name="arrow-down" />
 
 * @param name - name of icon
 */

export default function Icons({ name, color }: IIconProps) {
  const iconsProps = {
    color,
  };
  const iconsHashmap: IIcons = {
    Logo: <Logo {...iconsProps} />,
    OpenIcon: <OpenIcon {...iconsProps} />,
    PositiveIcon: <PositiveIcon {...iconsProps} />,
    NegativeIcon: <NegativeIcon {...iconsProps} />,
  };

  return iconsHashmap[name as keyof typeof iconsHashmap] || null;
}
