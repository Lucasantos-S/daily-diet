import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from '../storageConfig';
import { mealGetAll } from '../Meal/MealGet';

export interface Meal {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  diet?: boolean;
}
export async function updateMeal(newMeal: Meal) {
  try {
    
  } catch (error) {
    console.error('Error registering meal:', error);
  }
}