// third-party
import React from 'react';
// react-native
import {View} from 'react-native';
import {AppSafeAreaView, AppStatusBar} from '../../../components/Common';
import {CommonStyle} from '../../../utils';

const MenuTab = (): React.ReactElement => {
  return (
    <AppSafeAreaView edges={['top']}>
      <AppStatusBar />
      <View style={CommonStyle.main} />
    </AppSafeAreaView>
  );
};

export default MenuTab;
