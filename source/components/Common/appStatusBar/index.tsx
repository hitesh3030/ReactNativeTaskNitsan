import {useIsFocused} from '@react-navigation/native';
import React from 'react';
// react-native
import type {StatusBarStyle} from 'react-native';
import {StatusBar} from 'react-native';
import {Colors} from '../../../theme';

type Props = {
  isTransparent?: boolean;
  backgroundColor?: string;
  contentType?: StatusBarStyle;
};
const AppStatusBar = (props: Props): React.ReactElement | null => {
  const {
    isTransparent = false,
    backgroundColor = Colors.white,
    contentType = 'dark-content',
  } = props;

  const isFocused = useIsFocused();

  if (!isFocused) return null;

  return (
    <StatusBar
      translucent={isTransparent}
      barStyle={contentType}
      backgroundColor={backgroundColor}
    />
  );
};

export default AppStatusBar;
