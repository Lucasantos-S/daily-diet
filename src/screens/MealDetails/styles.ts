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
});
