import styled from 'styled-components/native';
import theme from '../../theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
  },

  avatar: {
    width: 40,
    height: 40,
    backgroundColor: theme.COLORS.GRAY_60,
    borderRadius: 100,
  },
});

