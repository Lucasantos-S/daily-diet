import AsyncStorage from '@react-native-async-storage/async-storage';
import { mealGetAll } from '../Meal/MealGet';
import { MEAL_COLLECTION } from '../storageConfig';
import { Meal } from '../NewMeal/mealCreate';

export async function removeGroupByName(meal: Meal) {
  try {
    const storage = await mealGetAll();

    const updatedData = storage
      .map(item => {
        if (item.date === meal.date) {
          const updatedMeals = item.meals.filter(meals => meals.id !== meal.id);
          if (updatedMeals.length === 0) {
            return null;
          }

          return { ...item, meals: updatedMeals };
        }
        return item;
      })
      .filter(Boolean);

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(updatedData));
  } catch (error) {
    throw error;
  }
}
