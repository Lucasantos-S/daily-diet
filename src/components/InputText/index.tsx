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
  inputRef?: React.RefObject<TextInput>;
  error?: string;
  onFocus?: () => void;
};

export function InputText({
  label,
  height = 48,
  width = '100%',
  onFocus,
  inputRef,
  error,
  ...rest
}: InputProps) {
  return (
    <View style={[styles.container, { width: width }]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        ref={inputRef}
        onFocus={onFocus}
        style={[styles.inputText, { height: height }]}
        {...rest}></TextInput>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
}
