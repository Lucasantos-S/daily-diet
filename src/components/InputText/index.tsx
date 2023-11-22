import React from 'react';
import {
  Text,
  TextInput,
  View,
  TextInputProps,
  DimensionValue,
} from 'react-native';

import { styles } from './styles';

type InputProps = TextInputProps & {
  label: string;
  height?: number;
  width?: DimensionValue;
};

export function InputText({
  label,
  height = 48,
  width = '100%',
  ...rest
}: InputProps) {
  return (
    <View style={[styles.container, { width: width }]}>
      <Text>{label}</Text>
      <TextInput
        style={[styles.inputText, { height: height}]}
        {...rest}></TextInput>
    </View>
  );
}
