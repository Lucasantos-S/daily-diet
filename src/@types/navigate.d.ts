export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistic: undefined;
      meal: {
        title: string;
      };
      mealDetails: {
        diet: boolean;
        mealData?: {
          name: string;
          description: string;
        };
      };
      feedback: {
        diet: boolean;
      };
    }
  }
}
