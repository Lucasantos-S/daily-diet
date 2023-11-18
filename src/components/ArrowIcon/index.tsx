import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import { styles } from './styles';
import Icons from '@/assets/icons';
import { IIcons } from '@/assets/icons/Icons.structure';
import theme from '@/theme';

type IArrowIconType = 'OPEN' | 'CLOSE';

type IArrowIconProps = TouchableOpacityProps & {
  type: IArrowIconType;
  color?: boolean;
};

export function ArrowIcon({ type, color, ...props }: IArrowIconProps) {
  const containerStyle: ViewStyle = {
    position: type === 'CLOSE' ? 'relative' : 'absolute',
    right: type === 'CLOSE' ? 0 : 8,
    top: type === 'CLOSE' ? 0 : 8,
    transform: type === 'CLOSE' ? [{ rotate: '225deg' }] : [],
  };

  const colorProps = color ? theme.COLORS.RED_DARK : theme.COLORS.GRAY_60;
  return (
    <TouchableOpacity style={[styles.container, containerStyle]} {...props}>
      <Icons name={'OpenIcon'} color={colorProps as keyof IIcons} />
    </TouchableOpacity>
  );
}
