import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics, typoGraphy} from '../../../theme';

// theme

const Styles = StyleSheet.create({
  helpForgotText: {
    color: Colors.secondary,
    fontFamily: Fonts.Medium,
    fontSize: typoGraphy.subTitle,
  },
  contentContainerStyle: {
    justifyContent: 'center',
    flexGrow: 1,
  },
  logoView: {
    alignSelf: 'flex-end',
  },
  logoImage: {
    height: Metrics.rfv(40),
    width: Metrics.rfv(160),
  },
  headerView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Metrics.rfv(20),
  },
  headerTitle: {
    color: Colors.black,
    fontFamily: Fonts.Medium,
    fontSize: typoGraphy.subHeader,
    textAlign: 'center',
  },
  label: {
    color: Colors.gray,
    fontFamily: Fonts.Medium,
    fontSize: typoGraphy.subTitle,
    lineHeight: Metrics.rfv(20),
    marginVertical: Metrics.rfv(5),
  },
  mainHelpForgot: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    marginTop: Metrics.rfv(12),
  },
  mainTextInput: {
    marginTop: Metrics.rfv(3),
  },
  privacyText: {
    color: Colors.lightGray,
    fontFamily: Fonts.Regular,
    fontSize: typoGraphy.caption,
    fontWeight: '400',
    lineHeight: Metrics.rfv(14),
    marginTop: Metrics.rfv(15),
    textAlign: 'center',
  },
  privacyTextUnderline: {
    color: Colors.pendingLeaveType,
    fontFamily: Fonts.Medium,
    fontWeight: '600',
    padding: Metrics.rfv(5),
  },
  router: {
    flex: 1,
    padding: Metrics.rfv(20),
    justifyContent: 'center',
  },
});

export default Styles;
