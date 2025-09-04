import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics, typoGraphy} from '../../../theme';

const Styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: Colors.primary,
    fontFamily: Fonts.SemiBold,
    fontSize: typoGraphy.subHeader,
    paddingHorizontal: Metrics.rfv(15),
    textAlign: 'center',
  },
});

export default Styles;
