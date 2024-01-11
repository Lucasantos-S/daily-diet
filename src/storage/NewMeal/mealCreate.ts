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

export async function MealCreate(newMeal: Meal) {
  try {
    const storedMeals = await mealGetAll();
    const updatedMeals = [...storedMeals]; // Cria uma cópia para evitar mutação direta
    const existingDateIndex = updatedMeals.findIndex(
      meal => meal.date === newMeal.date,
    );

    if (existingDateIndex !== -1) {
      const existingMeal = updatedMeals[existingDateIndex];
      const existingMealIndex = existingMeal.meals.findIndex(
        meal => meal.id === newMeal.id,
      );

      if (existingMealIndex !== -1) {
        existingMeal.meals[existingMealIndex] = {
          ...newMeal,
        };
      } else {
        // Adiciona a nova refeição, caso não exista
        existingMeal.meals.push(newMeal);
      }
    } else {
      // Cria uma nova entrada para o dia
      const newEntry = {
        date: newMeal.date,
        meals: [newMeal],
      };
      updatedMeals.push(newEntry);
    }

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(updatedMeals));
  } catch (error) {
    console.error('Error registering meal:', error);
  }
}
