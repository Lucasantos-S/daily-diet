import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import AnimationList from '../LottieAnimated/AnimationList';

type IListEmptyProps = {
  text: string;
};

export function ListEmpty({ text }: IListEmptyProps) {
  return (
    <View style={styles.container}>
      <AnimationList />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
