import theme from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  percentage: {
    color: theme.COLORS.GRAY_70,
    fontSize: theme.FONT_SIZE.G,
    fontFamily: theme.FONT_FAMILY.BOLD,
  },
  description: {
    color: theme.COLORS.GRAY_60,
    fontSize: theme.FONT_SIZE.SM,
    fontFamily: theme.FONT_FAMILY.BOLD,
  },
});
