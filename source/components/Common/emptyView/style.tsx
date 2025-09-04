import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics, typoGraphy} from '../../../theme';

const Styles = StyleSheet.create({
  mainView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginTop: '25%',
  },
  textStyle: {
    color: Colors.primary,
    fontFamily: Fonts.SemiBold,
    fontSize: typoGraphy.header,
    marginTop: Metrics.rfv(30),
    textAlign: 'center',
  },
});

export default Styles;
