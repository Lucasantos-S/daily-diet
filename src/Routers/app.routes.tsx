import { Home } from '../screens/Home';
import { Statistics } from '../screens/Statistics';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRouters() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistic" component={Statistics} />
    </Navigator>
  );
}
