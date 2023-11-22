import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  TouchableOpacityProps,
} from 'react-native';

import { styles } from './styles';
import theme from '@/theme';

export type SelectButtonType = 'DIET' | 'NOT_DIET';

type SelectButton = TouchableOpacityProps & {
  text: string;
  IsActive: boolean;
  type: SelectButtonType;
};

export function SelectButton({ text, type, IsActive, ...rest }: SelectButton) {
  return (
    <TouchableOpacity
      {...rest}
      style={[
        styles.container,
        {
          borderColor: IsActive ? theme.COLORS.GREEN_DARK : 'transparent',
          backgroundColor: IsActive
            ? theme.COLORS.GREEN_LIGHT
            : theme.COLORS.GRAY_20,
        },
      ]}>
      <View
        style={[
          styles.status,
          {
            backgroundColor:
              type === 'DIET'
                ? theme.COLORS.GREEN_DARK
                : theme.COLORS.GREEN_DARK,
          },
        ]}></View>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
