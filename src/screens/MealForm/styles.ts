import theme from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: theme.COLORS.RED_LIGHT,
  },
  main: {
    flex: 1,
    backgroundColor: theme.COLORS.WHITE,

    alignContent: 'center',
    marginTop: 34,
    padding: 24,
    paddingTop: 16,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  dietSelectContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginTop: 8,
  },

  dietTitle: {
    marginTop: 24,
    color: theme.COLORS.GRAY_70,
    fontSize: theme.FONT_SIZE.MD,
    fontFamily: theme.FONT_FAMILY.BOLD,
  },
});
