import React from 'react';
// react-native
import type {ViewStyle} from 'react-native';
import {ActivityIndicator, View} from 'react-native';

// Styles
import Styles from './style';
import {Colors} from '../../../theme';

type LoaderProps = {
  loading: boolean;
  backColor?: string;
  loaderColor?: string;
  style?: ViewStyle;
};

const Loader: React.FC<LoaderProps> = ({
  loading,
  backColor = Colors.transparent,
  loaderColor = Colors.primary,
  style = {},
}) => {
  return (
    <>
      {loading && (
        <View
          style={[
            Styles.container,
            {backgroundColor: backColor ? backColor : Colors.transparent},
            style,
          ]}>
          <ActivityIndicator
            animating={loading}
            size="large"
            color={loaderColor ? loaderColor : Colors.primary}
          />
        </View>
      )}
    </>
  );
};

export default Loader;
