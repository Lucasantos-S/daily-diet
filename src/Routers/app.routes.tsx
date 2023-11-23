import { Home } from '../screens/Home';
import { Statistics } from '../screens/Statistics';
import { MealForm } from '../screens/MealForm';
import { Feedback } from '../screens/Feedback';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRouters() {
  return (
    <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistic" component={Statistics} />
      <Screen name="meal" component={MealForm} />
      <Screen name="feedback" component={Feedback} />
    </Navigator>
  );
}
