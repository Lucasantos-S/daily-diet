import theme from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 24,
    // paddingLeft: 24,
    // paddingRight: 24,
    overflow: 'hidden',
    backgroundColor: theme.COLORS.RED_LIGHT,
  },

  header: {
    paddingTop: 24,
    paddingLeft: 24,
    paddingRight: 24,
    backgroundColor: 'transparent',
  },

  main: {
    flex: 1,
    backgroundColor: theme.COLORS.WHITE,

    alignContent: 'center',
    marginTop: 34,
    paddingLeft: 24,
    paddingRight: 24,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  title: {
    fontSize: theme.FONT_SIZE.XS,
    color: theme.COLORS.GRAY_70,
    fontFamily: theme.FONT_FAMILY.BOLD,

    textAlign: 'center',
    marginTop: 33,
    marginBottom: 10,
  },

  meals: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
