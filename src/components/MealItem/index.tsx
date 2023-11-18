import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

import { styles } from './styles';

type IMealItemProps = TouchableOpacityProps & {
  text: string;
  time: string;
  status?: string;
};

export function MealItem({ text, time, status }: IMealItemProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.time}>{time}</Text>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.status}></View>
    </TouchableOpacity>
  );
}
