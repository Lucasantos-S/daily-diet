import { StyleSheet } from 'react-native';
import theme from '../../theme/index';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.GRAY_10,

    paddingTop: 24,
    paddingLeft: 24,
    paddingRight: 24,
    overflow: 'hidden',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  percentageContent: {
    width: '100%',
    height: 102,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: theme.COLORS.GREEN_LIGHT,
    borderRadius: 8,
    marginTop: 32,
    marginBottom: 40,
  },

  title: {
    fontSize: theme.FONT_SIZE.MD,
    color: theme.COLORS.GRAY_70,
    fontFamily: theme.FONT_FAMILY.REGULAR,
  },

  TextDay: {
    fontSize: theme.FONT_SIZE.LG,
    color: theme.COLORS.GRAY_70,
    fontFamily: theme.FONT_FAMILY.BOLD,

    marginTop: 32,
  },

  blurOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 30,
    backgroundColor: theme.COLORS.GRAY_10,
    opacity: 0.9,
    zIndex: 1,
  },
});
