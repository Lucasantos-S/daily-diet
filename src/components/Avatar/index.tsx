import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

export function Avatar() {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}></View>
    </View>
  );
}
