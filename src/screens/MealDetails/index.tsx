import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import { MealHeader } from '@/components/MealHeader';
import { SafeAreaView } from 'react-native-safe-area-context';

export function MealDetails() {
  return (
    <SafeAreaView style={styles.container}>
      <MealHeader title="Refeição" />
      <View style={styles.main}></View>
    </SafeAreaView>
  );
}
