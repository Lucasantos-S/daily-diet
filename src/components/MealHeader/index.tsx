import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';
import { ArrowIcon } from '../ArrowIcon';
import { useNavigation } from '@react-navigation/native';

type MealHeaderProps = {
  title: string;
};

export function MealHeader({ title }: MealHeaderProps) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ArrowIcon type="CLOSE" onPress={() => navigation.goBack()} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}
