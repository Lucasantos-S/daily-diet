import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';
type IPercentageTextProps = {
  fontSize: number;
  value: string;
  description: string;
};

export function PercentageText({
  description,
  value,
  fontSize,
}: IPercentageTextProps) {
  return (
    <View style={styles.container}>
      <Text style={[styles.percentage, { fontSize: fontSize }]}>{value}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}
