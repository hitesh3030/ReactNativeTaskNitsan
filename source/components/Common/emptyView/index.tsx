import React from 'react';
// react-native
import {Text, View} from 'react-native';

import Styles from './style';
import {SimpleText} from '../../../theme/screenText';

type Props = {
  emptyText?: string;
};

const EmptyView = (props: Props): React.ReactElement => {
  const {emptyText = SimpleText.NO_DATA_FOUND} = props;

  return (
    <View style={Styles.mainView}>
      <Text style={Styles.textStyle}>{emptyText}</Text>
    </View>
  );
};

export default EmptyView;
