import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme';

const Styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.transparent,
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    zIndex: 200,
  },
});

export default Styles;
