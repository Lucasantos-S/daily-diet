import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { MealHeader } from '@/components/MealHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import { Button } from '@/components/Button';
import theme from '@/theme';

type RoutersParams = {
  diet: string;
  mealData: {
    name: string;
    description: string;
  };
};

export function MealDetails() {
  const route = useRoute();
  const { diet, mealData } = route.params as RoutersParams;
  return (
    <SafeAreaView style={styles.container}>
      <MealHeader title="Refeição" />
      <View style={styles.main}>
        <Text style={styles.title}>{mealData.name}</Text>
        <Text style={styles.description}>{mealData.description}</Text>
        <Text style={styles.dateTitle}>Data e hora</Text>
        <Text style={styles.dateDescription}>12/08/2022 às 16:00</Text>

        <View style={styles.statusContainer}>
          <View style={styles.statusContent}>
            <View
              style={[
                styles.status,
                {
                  backgroundColor: diet
                    ? theme.COLORS.GREEN_DARK
                    : theme.COLORS.RED_DARK,
                },
              ]}
            />
            <Text style={styles.statusText}>
              {diet ? 'dentro da dieta' : 'fora da dieta'}
            </Text>
          </View>
        </View>
        <Button text="Editar refeição" type="PRIMARY" icon="Edit" />
        <Button text="Excluir refeição" type="SECONDARY" icon="Delete" />
      </View>
    </SafeAreaView>
  );
}
