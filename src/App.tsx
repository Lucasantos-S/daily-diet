import { StatusBar, View } from 'react-native';
import { Routers } from './Routers';
import { StatisticsProvider } from './context/statisticsProvider';

function App(): JSX.Element {
  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor="transparent"
      />
      <StatisticsProvider>
        <Routers />
      </StatisticsProvider>
    </>
  );
}

export default App;
