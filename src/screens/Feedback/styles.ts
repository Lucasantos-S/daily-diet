import theme from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.GRAY_10,
    alignItems: 'center',
    justifyContent: 'center',

    padding: 24,
  },

  title: {
    fontSize: theme.FONT_SIZE.XL,
    fontFamily: theme.FONT_FAMILY.BOLD,

    marginBottom: 8,
  },
  subTitle: {
    color: theme.COLORS.GRAY_70,
    fontSize: theme.FONT_SIZE.MD,
    fontFamily: theme.FONT_FAMILY.REGULAR,
    marginBottom: 40,

    textAlign: 'center',
  },
  emphasis: {
    color: theme.COLORS.GRAY_70,
    fontSize: theme.FONT_SIZE.MD,
    fontFamily: theme.FONT_FAMILY.BOLD,
  },

  ButtonContainer: {
    marginTop: 38,
  },
});
