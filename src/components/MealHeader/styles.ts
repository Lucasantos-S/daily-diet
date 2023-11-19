import theme from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 24,
    paddingLeft: 24,
    paddingRight: 24,
  },
  text: {
    
    textAlign: 'center',
    fontSize: theme.FONT_SIZE.SM,
    color: theme.COLORS.GRAY_70,
    fontFamily: theme.FONT_FAMILY.BOLD,
    position:'absolute',
    right:0,
    left:0,
    top:25,
    zIndex:0,
  },
});
