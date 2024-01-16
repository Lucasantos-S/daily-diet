import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';
import { useStatistics } from '@/context/statisticsProvider';
type IPercentageTextProps = {
  fontSize: number;
  value: string | number;
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
