import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics, typoGraphy} from '../../../theme';

// theme

const Styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: Colors.black,
    justifyContent: 'center',
    textTransform: 'uppercase',
    marginTop: Metrics.rfv(40),
    width: '100%',
  },
  bottomView: {
    alignSelf: 'flex-start',
    paddingHorizontal: Metrics.rfv(15),
  },
  contentContainerStyle: {
    justifyContent: 'center',
    flexGrow: 1,
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
  logoView: {
    alignSelf: 'flex-end',
  },
  logoImage: {
    height: Metrics.rfv(40),
    width: Metrics.rfv(160),
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
