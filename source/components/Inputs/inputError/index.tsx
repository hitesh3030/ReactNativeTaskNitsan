import React from 'react';
import { Text, View } from 'react-native';

import Styles, { errorTextColor } from './style';

const InputError = ({
  isValid = false,
  style = {},
  message = '',
}): React.ReactElement => {
  return (
    <View style={Styles.mainViewStyle}>
      <Text style={[Styles.errorTextStyle, errorTextColor(isValid), style]}>
        {message}
      </Text>
    </View>
  );
};

export default InputError;
