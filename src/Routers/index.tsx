import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import { NavigationContainer } from '@react-navigation/native';
import { AppRouters } from './app.routes';

export function Routers() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <AppRouters />
      </NavigationContainer>
    </View>
  );
}
