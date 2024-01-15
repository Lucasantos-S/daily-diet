import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Meals, mealGetAll } from '@/storage/meal/mealGet';

export interface IDecodedContext {
  mealDiet: number;
  teste: () => void;
}

export interface IDecodedContextProviderProps {
  children: React.ReactNode;
}

export interface IDecoded {
  acc: string[];
  accountId: string[];
  client_id: string;
  exp: number;
  iat: number;
  isItau: boolean;
  scope: string;
}

const StatisticsContext = React.createContext({} as IDecodedContext);

function StatisticsProvider({ children }: IDecodedContextProviderProps) {
  const [mealDiet, setMealDiet] = React.useState(0 as number);

  async function teste() {
    try {
      const storage = await mealGetAll();
      const mealsList = storage.map(item => {
        return item.meals;
      });

      const total = mealsList.reduce((acc, Meals) => {
        return acc + Meals.length;
      }, 0);

      // const withinTheDiet = mealsList.filter(mealsList => {
      // return mealsList.
      // })

      setMealDiet(total);
    } catch (error) {
      throw error;
    }
  }

  return (
    <StatisticsContext.Provider value={{ mealDiet, teste }}>
      {children}
    </StatisticsContext.Provider>
  );
}

function useStatistics() {
  const context = React.useContext(StatisticsContext);

  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }

  return context;
}

export { StatisticsProvider, useStatistics };
