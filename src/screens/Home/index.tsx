import React, { useState } from 'react';
import { Text, View, Animated, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import theme from '@/theme';

import { Avatar } from '@/components/Avatar';
import { PercentageText } from '@/components/PercentageText';
import { Button } from '@/components/Button';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { MealItem } from '@/components/MealItem';
import { ArrowIcon } from '@/components/ArrowIcon';

import { ListEmpty } from '@/components/ListEmpty';
import Icons from '@/assets/icons';
import { mealGetAll } from '@/storage/meal/mealGet';
import { useStatistics } from '@/context/statisticsProvider';
import { Meal } from '@/storage/meal/mealRegister';

export function Home() {
  const navigation = useNavigation();
  const [meal, setMeal] = useState([] as Meal[]);
  function handleNavigation() {
    navigation.navigate('statistic');
  }
  //<MealItem text={item} time={'20:00'} />
  const renderMealList = React.useMemo(() => {
    return (
      <FlatList
        data={meal}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View>
            <MealItem
              key={item.id}
              text={item.name}
              time={item.time}
              status={item.diet}
              onPress={() => {
                navigation.navigate('mealDetails', { meal: item });
              }}
            />
          </View>
        )}
        contentContainerStyle={
          (meal.length === 0 && { marginTop: 100 },
          { borderBottomWidth: 50, borderColor: 'transparent' })
        }
        ListEmptyComponent={() => (
          <ListEmpty text="Nenhuma refeição cadastrada ate o momento." />
        )}
        showsVerticalScrollIndicator={false}
      />
    );
  }, [meal]);

  async function fetchMeals() {
    try {
      const data = await mealGetAll();
      // const teste = data.map(item => {
      //   item.meals.map(item => console.log(item.diet));
      // });
      console.log(data);
      setMeal(data.reverse());
    } catch (error) {}
  }
  useFocusEffect(
    React.useCallback(() => {
      fetchMeals();
    }, []),
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Icons name="Logo" />
        <Avatar />
      </View>
      <View style={styles.percentageContent}>
        <ArrowIcon type="OPEN" color onPress={handleNavigation} />
        <PercentageText
          value="30,21%"
          description="das refeições dentro da dieta"
          fontSize={theme.FONT_SIZE.G}
        />
      </View>
      <Text style={styles.title}>Refeições</Text>

      <Button
        text="Nova refeição"
        type="PRIMARY"
        onPress={() => navigation.navigate('meal', { title: 'Nova refeição' })}
      />

      {renderMealList}
      <View style={styles.blurOverlay} />
    </SafeAreaView>
  );
}
