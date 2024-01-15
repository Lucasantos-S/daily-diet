import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from '../storageConfig';
import { mealGetAll } from './mealGet';

export interface Meal {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  diet?: boolean;
}

export async function MealCreate(newMeal: Meal) {
  try {
    const storedMeals = await mealGetAll();
    const mealExists = storedMeals.some(meal => meal.id === newMeal.id);
    if (mealExists) {
      console.log('update', newMeal);
      return;
    }
    await AsyncStorage.setItem(
      MEAL_COLLECTION,
      JSON.stringify([...storedMeals, newMeal]),
    );
  } catch (error) {
    console.error('Error registering meal:', error);
  }
}
