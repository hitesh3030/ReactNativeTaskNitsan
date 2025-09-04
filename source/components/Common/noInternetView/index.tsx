import React from 'react';
// react-native
import {Text, View} from 'react-native';

import Styles from './style';
import {AppIcon} from '../../../theme/svg';
import {iconSize} from '../../../theme';
import {ErrorMessage} from '../../../theme/screenText';

const NoInternetView = (): React.ReactElement => {
  return (
    <View style={Styles.container}>
      <AppIcon height={iconSize.mega} width={iconSize.superHuge} />
      <Text style={Styles.title}>{ErrorMessage.INTERNET_MESSAGE_TITLE}</Text>
      <Text style={Styles.title}>{ErrorMessage.INTERNET_MESSAGE}</Text>
    </View>
  );
};

export default NoInternetView;
