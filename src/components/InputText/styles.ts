import theme from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 24,
  },
  label: {
    color: theme.COLORS.GRAY_70,
    fontFamily: theme.FONT_FAMILY.BOLD,
    fontSize: theme.FONT_SIZE.SM,
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
  error: {
    marginTop: 4,
    color: theme.COLORS.RED_DARK,
    fontFamily: theme.FONT_FAMILY.REGULAR,
    fontSize: theme.FONT_SIZE.SM,
  },
});
