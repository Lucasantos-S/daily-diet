import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from '../storageConfig';
import { mealGetAll } from './mealGet';
import { Meal, mealCreate } from './mealRegister';
import { mealDelet } from './mealDelete';

export async function updateMeal(newMeal: Meal) {
  try {
    await mealDelet(newMeal);

    await mealCreate(newMeal);
  } catch (error) {
    console.error('Error registering meal:', error);
  }
}
