import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import theme from '@/theme';

import { ArrowIcon } from '@/components/ArrowIcon';
import { PercentageText } from '@/components/PercentageText';
import { useNavigation } from '@react-navigation/native';
import { StatisticsCard } from '@/components/StatisticsCard';
import { useStatistics } from '@/context/statisticsProvider';

export function Statistics() {
  const { createStatistics, mealStatistics } = useStatistics();
  const navigation = useNavigation();
  function handleNavigation() {
    navigation.navigate('home');
  }

  function getStatistics() {
    createStatistics();
  }

  React.useEffect(() => {
    getStatistics();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <ArrowIcon type="CLOSE" color onPress={handleNavigation} />
        <PercentageText
          value={`${mealStatistics.dietPercentage}%`}
          description="das refeições dentro da dieta"
          fontSize={theme.FONT_SIZE.G}
        />
      </View>
      <View style={styles.main}>
        <Text style={styles.title}>Estatísticas gerais</Text>
        <StatisticsCard
          value={4}
          description="melhor sequência de pratos dentro da dieta"
          color={theme.COLORS.GRAY_20}
        />
        <StatisticsCard
          value={mealStatistics.total}
          description="refeições registradas"
          color={theme.COLORS.GRAY_20}
        />

        <View style={styles.meals}>
          <StatisticsCard
            value={mealStatistics.diet}
            description="refeições dentro da dieta"
            color={theme.COLORS.GREEN_LIGHT}
            width="48%"
            height={107}
          />
          <StatisticsCard
            value={mealStatistics.offDiet}
            description="refeições fora da dieta"
            color={theme.COLORS.RED_LIGHT}
            width="48%"
            height={107}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
