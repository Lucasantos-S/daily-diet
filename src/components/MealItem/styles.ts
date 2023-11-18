import theme from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 49,
    borderWidth: 1,
    borderColor: theme.COLORS.GRAY_50,

    alignItems: 'center',
    flexDirection: 'row',

    padding: 12,
    borderRadius: 6,
    marginTop: 6,
    marginBottom: 6,
  },

  text: {
    fontSize: theme.FONT_SIZE.MD,
    color: theme.COLORS.GRAY_60,
    fontFamily: theme.FONT_FAMILY.BOLD,
    flex: 1,
    paddingLeft: 12,
  },

  time: {
    fontSize: theme.FONT_SIZE.SM,
    color: theme.COLORS.GRAY_70,
    fontFamily: theme.FONT_FAMILY.BOLD,

    paddingRight: 12,
    borderRightWidth: 1,
    borderColor: theme.COLORS.GRAY_40,
  },

  status: {
    width: 20,
    height: 20,

    borderRadius: 100,
    backgroundColor: theme.COLORS.GREEN_LIGHT,
  },
});
