import theme from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: 'transparent',
    padding: 24,
  },

  text: {
    fontSize: theme.FONT_SIZE.SM,
    color: theme.COLORS.GRAY_60,
    fontFamily: theme.FONT_FAMILY.REGULAR,

    textAlign: 'center',
  },
});
