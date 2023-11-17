import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

import Logo from '@/assets/icons/Logo';

import { Avatar } from '@/components/Avatar';
import { PercentageText } from '@/components/PercentageText';

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Logo />
        <Avatar />
      </View>
      <View style={styles.percentageContent}>
        <PercentageText />
      </View>
      <Text style={styles.title}>Refeições</Text>
    </SafeAreaView>
  );
}
