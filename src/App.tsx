import { StatusBar, View } from 'react-native';
import { Routers } from './Routers';

function App(): JSX.Element {
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        translucent
        backgroundColor="transparent"
      />
      <Routers />
    </>
  );
}

export default App;
