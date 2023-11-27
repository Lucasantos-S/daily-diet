import theme from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,

    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',

    borderRadius: 6,
    marginTop: 8,
    paddingHorizontal: 20,
  },

  icon: {
    position: 'absolute',
    left: 90,
  },

  text: {
    fontSize: theme.FONT_SIZE.SM,
    color: theme.COLORS.WHITE,
    fontFamily: theme.FONT_FAMILY.BOLD,
  },
});
