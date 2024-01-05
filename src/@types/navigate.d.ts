export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistic: undefined;
      meal: {
        title: string;
        meal?: Meal;
      };
      mealDetails: {
        meal: Meal;
      };
      feedback: {
        diet: boolean;
      };
    }
  }
}
