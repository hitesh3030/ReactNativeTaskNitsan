import type {TextStyle} from 'react-native';
import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics, typoGraphy} from '../../../theme';

// theme

const Styles = StyleSheet.create({
  errorTextStyle: {
    flex: 1,
    fontFamily: Fonts.Regular,
    fontSize: typoGraphy.body,
  },
  mainViewStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: Metrics.rfv(8),
  },
});

export default Styles;

export const errorTextColor: (isValid: boolean) => TextStyle = (
  isValid: boolean,
) => ({
  color: isValid ? Colors.ValidationValid : Colors.error,
});
