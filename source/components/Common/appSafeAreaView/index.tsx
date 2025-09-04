import React from 'react';
// third-party
import {SafeAreaView} from 'react-native-safe-area-context';
import {CommonStyle} from '../../../utils';
import {Colors} from '../../../theme';

type Props = {
  edges?: ('left' | 'right' | 'bottom' | 'top')[];
  backgroundColor?: string;
  children?: React.ReactNode;
};
const AppSafeAreaView = (props: Props): React.ReactElement => {
  const {edges, backgroundColor, children} = props;
  return (
    <SafeAreaView
      edges={edges}
      style={[
        CommonStyle.flex,
        {
          backgroundColor: backgroundColor ? backgroundColor : Colors.white,
        },
      ]}>
      {children}
    </SafeAreaView>
  );
};

export default AppSafeAreaView;
