import {StyleSheet} from 'react-native';
import {Fonts, Metrics, typoGraphy} from '../../../theme';

// theme

const Styles = StyleSheet.create({
  buttonDisableStyle: {
    alignItems: 'center',
    borderRadius: Metrics.rfv(5),
    justifyContent: 'center',
    paddingHorizontal: Metrics.rfv(1),
    paddingVertical: Metrics.rfv(12),
    width: '100%',
  },
  buttonStyle: {
    alignItems: 'center',
    borderRadius: Metrics.rfv(5),
    justifyContent: 'center',
    paddingHorizontal: Metrics.rfv(1),
    paddingVertical: Metrics.rfv(12),
    width: '100%',
  },
  buttonTextStyle: {
    fontFamily: Fonts.SemiBold,
    fontSize: typoGraphy.appHeader,
    lineHeight: Metrics.rfv(22),
    textTransform: 'uppercase',
  },
});

export default Styles;
