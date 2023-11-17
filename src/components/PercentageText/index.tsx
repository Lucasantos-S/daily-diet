import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

export function PercentageText() {
  return (
    <View style={styles.container}>
      <Text style={styles.percentage}>90,86%</Text>
      <Text style={styles.description}>das refeições dentro da dieta</Text>
    </View>
  );
}
