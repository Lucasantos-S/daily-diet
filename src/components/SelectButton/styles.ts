import theme from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '48%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,

    borderWidth: 1,
    borderRadius: 6,
  },

  status: {
    width: 10,
    height: 10,
    borderRadius: 100,
  },

  text: {
    color: theme.COLORS.GRAY_70,
    fontSize: theme.FONT_SIZE.SM,
    fontFamily: theme.FONT_FAMILY.BOLD,
  },
});
