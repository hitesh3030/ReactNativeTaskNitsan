import React from 'react';
// react-native
import type {GestureResponderEvent} from 'react-native';
import {Pressable, Text, View} from 'react-native';

// Styles
import Styles from './style';
import {Colors} from '../../../theme';

type props = {
  title?: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: object;
  BGcolor?: string;
  borderColor?: string;
  borderWidth?: number;
  TxColor?: string;
  disabled?: boolean;
  buttonTextStyle?: object;
  buttonStyle?: object;
};

const Button = (props: props): React.ReactElement => {
  const {
    title = '',
    onPress = () => {},
    style = {},
    BGcolor = '',
    borderColor = '',
    borderWidth = 0,
    TxColor = '',
    disabled = false,
    buttonTextStyle = {},
    buttonStyle = {},
  } = props;
  return (
    <View style={style ? style : {backgroundColor: Colors.primary}}>
      <Pressable
        onPress={onPress}
        disabled={disabled}
        style={
          disabled
            ? [
                Styles.buttonDisableStyle,
                {
                  backgroundColor: BGcolor,
                  borderColor: borderColor,
                  borderWidth: borderWidth,
                },
                buttonStyle,
              ]
            : [
                Styles.buttonStyle,
                {
                  backgroundColor: BGcolor,
                  borderColor: borderColor,
                  borderWidth: borderWidth,
                },
                buttonStyle,
              ]
        }>
        <Text
          style={[
            Styles.buttonTextStyle,
            {
              color: TxColor,
            },
            buttonTextStyle,
          ]}>
          {title}
        </Text>
      </Pressable>
    </View>
  );
};

export default Button;
