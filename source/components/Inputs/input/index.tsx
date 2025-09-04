import React, {forwardRef} from 'react';
// react-native
import type {GestureResponderEvent, TextInputProps} from 'react-native';
import {Pressable, TextInput, View} from 'react-native';

// Styles
import Styles from './style';
import {CommonStyle} from '../../../utils';
import {Colors, iconSize, Metrics} from '../../../theme';
import {EyeHiddenIcon, EyeShowIcon} from '../../../theme/svg';

// Extend RNTextInputProps and add your custom props
type CustomTextInputProps = TextInputProps & {
  showEyeIcon?: boolean;
  showCalendarIcon?: boolean;
  showRightIcon?: boolean;
  showUploadIcon?: boolean;
  showLeftIcon?: boolean;
  leftIcon?: React.ReactNode;
  leftText?: string;
  textStyle?: object;
  onPressShow?: (event: GestureResponderEvent) => void;
  activeOpacity?: number;
  onPressHidden?: (event: GestureResponderEvent) => void;
  secure?: boolean;
  iconVisible?: boolean;
  keyboardType?: string | null;
  textInputStyle?: object;
};

const Input = forwardRef<TextInput, CustomTextInputProps>((props, ref) => (
  <View style={[CommonStyle.commonRow, props.textStyle]}>
    <TextInput
      {...props}
      ref={ref}
      style={[
        Styles.textInput,
        props.textInputStyle,
        {
          marginRight:
            props.showUploadIcon ||
            props.showCalendarIcon ||
            props.showEyeIcon ||
            props.showRightIcon
              ? Metrics.rfv(10)
              : Metrics.rfv(5),
        },
      ]}
      secureTextEntry={props.secure || false}
      spellCheck={true}
      autoComplete={props.autoComplete || 'off'}
      keyboardType={props.keyboardType ?? 'ascii-capable'}
      textContentType={props.textContentType ?? 'none'}
      autoCapitalize={props.autoCapitalize || 'none'}
      placeholderTextColor={props.placeholderTextColor || Colors.lightGray}
      editable={props.editable != null ? props.editable : true}
      cursorColor={Colors.onBackground}
      numberOfLines={props?.numberOfLines ? props?.numberOfLines : 1}
    />

    {props.showEyeIcon && (
      <>
        {props.iconVisible ? (
          <Pressable onPress={props.onPressShow} style={Styles.eyeIcon}>
            <EyeHiddenIcon width={iconSize.large} height={iconSize.large} />
          </Pressable>
        ) : (
          <Pressable onPress={props.onPressHidden} style={Styles.eyeIcon}>
            <EyeShowIcon width={iconSize.large} height={iconSize.large} />
          </Pressable>
        )}
      </>
    )}
  </View>
));
export default Input;
