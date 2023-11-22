import theme from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 40,
  },
  inputText: {
    padding: 10,
    fontSize: 16,
    color: theme.COLORS.GRAY_60,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: theme.COLORS.GRAY_30,
    marginTop: 4,
  },
});
