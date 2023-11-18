import React, { useState } from 'react';
import { Text, View, Animated, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

import Logo from '@/assets/icons/Logo';

import { Avatar } from '@/components/Avatar';
import { PercentageText } from '@/components/PercentageText';
import { Button } from '@/components/Button';
import { useNavigation } from '@react-navigation/native';
import { MealItem } from '@/components/MealItem';
import Icons from '@/assets/icons';
import { ArrowIcon } from '@/components/ArrowIcon';

export function Home() {
  const navigation = useNavigation();
  const [meal, setMeal] = useState([
    'Whey protein com leite',
    'Salada cesar com frango grelhado',
    ' Salada',
    'x-tudo',
    'cuzinho',
    'Pizza',
    'macarron',
  ]);

  function handleNavigation() {
    console.log('navigation');
    navigation.navigate('statistic');
  }

  const renderMealList = React.useMemo(() => {
    return (
      <FlatList
        data={meal}
        keyExtractor={item => item}
        renderItem={({ item }) => <MealItem text={item} time={'20:00'} />}
        contentContainerStyle={
          (meal.length === 0 && { marginTop: 100 },
          { borderBottomWidth: 50, borderColor: 'transparent' })
        }
        // ListEmptyComponent={() => (
        //   <ListEmpty message="Nenhuma turma cadastrada, que tal cadastrar?" />
        // )}
        showsVerticalScrollIndicator={false}
      />
    );
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Icons name="Logo" />
        <Avatar />
      </View>
      <View style={styles.percentageContent}>
        <ArrowIcon type="OPEN" color />
        <PercentageText />
      </View>
      <Text style={styles.title}>Refeições</Text>

      <Button text="Nova refeição" type="PRIMARY" onPress={handleNavigation} />

      <Text style={styles.TextDay}>12.08.22</Text>
      {renderMealList}
      <View style={styles.blurOverlay} />
    </SafeAreaView>
  );
}
