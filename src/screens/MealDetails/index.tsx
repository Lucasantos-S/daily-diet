import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { MealHeader } from '@/components/MealHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Button } from '@/components/Button';
import theme from '@/theme';
import { Meal } from '@/storage/meal/mealRegister';
import { removeGroupByName } from '@/storage/meal/mealDelete';

type RoutersParams = {
  meal: Meal;
};

export function MealDetails() {
  const navigation = useNavigation();

  const route = useRoute();
  const { meal } = route.params as RoutersParams;

  async function removeMeal() {
    await removeGroupByName(meal);
    navigation.navigate('home');
  }
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
        <Button
          text="Editar refeição"
          type="PRIMARY"
          icon="Edit"
          onPress={() =>
            navigation.navigate('meal', {
              title: 'Editar refeição',
              meal: meal,
            })
          }
        />
        <Button
          text="Excluir refeição"
          type="SECONDARY"
          icon="Delete"
          onPress={removeMeal}
        />
      </View>
    </SafeAreaView>
  );
}
