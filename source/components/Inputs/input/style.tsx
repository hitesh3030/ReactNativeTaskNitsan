import {Platform, StyleSheet} from 'react-native';

// theme
import {Colors, Fonts, Metrics, typoGraphy} from '../../../theme';

const Styles = StyleSheet.create({
  codeText: {
    color: Colors.lightGray,
    fontFamily: Fonts.Regular,
    fontSize: Metrics.rfv(14),
  },
  container: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderColor: Colors.lightGray,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    height: 50,
    paddingHorizontal: 10,
  },
  countryContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: Metrics.rfv(5),
    marginRight: 8,
  },
  eyeIcon: {
    justifyContent: 'center',
    marginRight: Metrics.rfv(3),
  },
  input: {
    color: Colors.black,
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  line: {
    color: Colors.lightGray,
    fontFamily: Fonts.Regular,
    fontSize: Metrics.rfv(10),
    marginLeft: Metrics.rfv(2),
  },
  textInput: {
    color: Colors.lightGray,
    flex: 1,
    fontFamily: Fonts.Regular,
    fontSize: typoGraphy.body,
    height: Metrics.rfv(42),
    marginTop: Platform.OS === 'android' ? Metrics.rfv(5) : Metrics.rfv(0),
  },
  unitText: {
    color: Colors.onBackground,
    fontFamily: Fonts.SemiBold,
    fontSize: typoGraphy.body,
    marginLeft: Metrics.rfv(5),
    marginTop: Platform.OS === 'android' ? Metrics.rfv(5) : Metrics.rfv(0),
  },
});

export default Styles;
