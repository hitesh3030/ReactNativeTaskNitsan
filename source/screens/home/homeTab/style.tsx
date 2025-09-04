import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics, typoGraphy} from '../../../theme';

const Styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  drawerContainer: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  headerContainer: {
    backgroundColor: Colors.black,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Metrics.rfv(15),
  },
  title: {
    color: Colors.white,
    fontFamily: Fonts.Medium,
    fontSize: typoGraphy.subHeader,
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Metrics.rfv(15),
  },
  iconView: {
    marginRight: Metrics.rfv(10),
  },
  itemTitle: {
    color: Colors.black,
    fontSize: typoGraphy.body,
    fontFamily: Fonts.Regular,
    marginLeft: Metrics.rfv(10),
  },
});
export default Styles;
