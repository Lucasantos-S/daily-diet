import React from 'react';
import { mealGetAll } from '@/storage/meal/mealGet';

export type MealStatistics = {
  diet: number;
  offDiet: number;
  total: number;
  dietPercentage: string;
};

export interface IDecodedContext {
  mealStatistics: MealStatistics;
  createStatistics: () => void;
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
  const [mealStatistics, setMealStatistics] = React.useState(
    {} as MealStatistics,
  );

  async function createStatistics() {
    const storage = await mealGetAll();

    const mealWithinTheDiet = storage.filter(mealsList => {
      if (mealsList.diet) return mealsList;
    });

    const offDiet = storage.filter(mealsList => {
      if (!mealsList.diet) return mealsList;
    });

    let percentage = 0;

    if (mealWithinTheDiet.length && storage.length) {
      percentage = (mealWithinTheDiet.length / storage.length) * 100;
    }

    return setMealStatistics({
      diet: mealWithinTheDiet.length,
      offDiet: offDiet.length,
      dietPercentage: percentage.toFixed(0),
      total: storage.length,
    });
  }

  return (
    <StatisticsContext.Provider value={{ mealStatistics, createStatistics }}>
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
