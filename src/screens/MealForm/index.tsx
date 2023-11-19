import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import { MealHeader } from '@/components/MealHeader';
import { SafeAreaView } from 'react-native-safe-area-context';

export function MealForm() {
  return (
    <SafeAreaView style={styles.container}>
      <MealHeader></MealHeader>
      <View style={styles.main}></View>
    </SafeAreaView>
  );
}
