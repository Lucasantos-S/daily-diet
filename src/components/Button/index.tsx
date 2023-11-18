import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';
import theme from '@/theme';

type buttonType = 'PRIMARY' | 'SECONDARY';

type ButtonProps = TouchableOpacityProps & {
  text: string;
  type: buttonType;
};
export function Button({ text, type, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      {...rest}
      style={[
        styles.container,
        {
          backgroundColor:
            type === 'PRIMARY' ? theme.COLORS.GRAY_60 : theme.COLORS.GRAY_10,
          borderWidth: 1,
          borderColor:
            type === 'PRIMARY' ? theme.COLORS.GRAY_60 : theme.COLORS.GRAY_70,
        },
      ]}>
      <Text
        style={[
          styles.text,
          {
            color:
              type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_70,
          },
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
