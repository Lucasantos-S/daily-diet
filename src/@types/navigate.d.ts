export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistic: undefined;
      meal: {
        title: string;
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
