import { StyleSheet } from 'react-native';
import theme from '../../theme/index';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.GRAY_10,

    padding: 24,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  percentageContent: {
    width: '100%',
    height: 102,

    backgroundColor: theme.COLORS.GREEN_LIGHT,
    borderRadius: 8,
    marginTop: 32,
    marginBottom: 40,
  },

  title: {
    fontSize:theme.FONT_SIZE.MD,
    color: theme.COLORS.GRAY_70,
    fontFamily: theme.FONT_FAMILY.REGULAR,
  },
});
