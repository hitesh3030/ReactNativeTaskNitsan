import React from 'react';
// react-native
import {View} from 'react-native';
import {AppSafeAreaView, AppStatusBar} from '../../../components/Common';
import {CommonStyle} from '../../../utils';
import {Colors} from '../../../theme';

const VideosTab = (): React.ReactElement => {
  return (
    <AppSafeAreaView edges={['top']} backgroundColor={Colors.white}>
      <AppStatusBar />
      <View style={CommonStyle.main} />
    </AppSafeAreaView>
  );
};

export default VideosTab;
