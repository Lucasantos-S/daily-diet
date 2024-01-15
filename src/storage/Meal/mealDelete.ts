import AsyncStorage from '@react-native-async-storage/async-storage';
import { mealGetAll } from './mealGet';
import { MEAL_COLLECTION } from '../storageConfig';
import { Meal } from './mealRegister';

export async function mealDelet(meal: Meal) {
  try {
    const storage = await mealGetAll();

    const updatedData = storage.filter(item => item.id !== meal.id);

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(updatedData));
  } catch (error) {
    throw error;
  }
}
