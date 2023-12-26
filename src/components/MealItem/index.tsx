import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

import { styles } from './styles';
import theme from '@/theme';

type IMealItemProps = TouchableOpacityProps & {
  text: string;
  time: string;
  status?: boolean;
};

export function MealItem({ text, time, status, ...rest }: IMealItemProps) {
  return (
    <TouchableOpacity {...rest} style={styles.container}>
      <Text style={styles.time}>{time}</Text>
      <Text style={styles.text}>{text}</Text>
      <View
        style={[
          styles.status,
          {
            backgroundColor: status
              ? theme.COLORS.GREEN_LIGHT
              : theme.COLORS.RED_LIGHT,
          },
        ]}></View>
    </TouchableOpacity>
  );
}
