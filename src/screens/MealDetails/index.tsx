import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { MealHeader } from '@/components/MealHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import { Button } from '@/components/Button';
import theme from '@/theme';
import { Meal } from '@/storage/NewMeal/mealCreate';

type RoutersParams = {
  meal: Meal;
};

export function MealDetails() {
  const route = useRoute();
  const { meal } = route.params as RoutersParams;
  return (
    <SafeAreaView style={styles.container}>
      <MealHeader title="Refeição" />
      <View style={styles.main}>
        <Text style={styles.title}>{meal.name}</Text>
        <Text style={styles.description}>{meal.description}</Text>
        <Text style={styles.dateTitle}>Data e hora</Text>
        <Text style={styles.dateDescription}>
          {meal.date}
          {' às'}
          {meal.time}
        </Text>

        <View style={styles.statusContainer}>
          <View style={styles.statusContent}>
            <View
              style={[
                styles.status,
                {
                  backgroundColor: meal.diet
                    ? theme.COLORS.GREEN_DARK
                    : theme.COLORS.RED_DARK,
                },
              ]}
            />
            <Text style={styles.statusText}>
              {meal.diet ? 'dentro da dieta' : 'fora da dieta'}
            </Text>
          </View>
        </View>
        <Button text="Editar refeição" type="PRIMARY" icon="Edit" />
        <Button text="Excluir refeição" type="SECONDARY" icon="Delete" />
      </View>
    </SafeAreaView>
  );
}
