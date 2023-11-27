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
  title: {
    marginTop: 24,
    color: theme.COLORS.GRAY_70,
    fontSize: theme.FONT_SIZE.XL,
    fontFamily: theme.FONT_FAMILY.BOLD,
  },
  description: {
    marginTop: 8,
    color: theme.COLORS.GRAY_60,
    fontSize: theme.FONT_SIZE.MD,
    fontFamily: theme.FONT_FAMILY.REGULAR,
  },

  dateTitle: {
    marginTop: 24,
    color: theme.COLORS.GRAY_70,
    fontSize: theme.FONT_SIZE.MD,
    fontFamily: theme.FONT_FAMILY.BOLD,
  },
  dateDescription: {
    marginTop: 8,
    color: theme.COLORS.GRAY_60,
    fontSize: theme.FONT_SIZE.LG,
    fontFamily: theme.FONT_FAMILY.REGULAR,
  },

  statusContainer: {
    flex: 1,
  },
  statusContent: {
    width: 144,
    height: 34,
    backgroundColor: theme.COLORS.GRAY_20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
    marginTop: 24,
    borderRadius: 100,
  },
  status: {
    width: 8,
    height: 8,
    marginTop: 4,
    borderRadius: 100,
  },
  statusText: {
    color: theme.COLORS.GRAY_70,
    fontSize: theme.FONT_SIZE.SM,
    fontFamily: theme.FONT_FAMILY.BOLD,
  },
});
