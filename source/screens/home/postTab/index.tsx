// third-party
import React from 'react';
// react-native
import {View} from 'react-native';
import {CommonStyle} from '../../../utils';
import {AppSafeAreaView, AppStatusBar} from '../../../components/Common';
import {Colors} from '../../../theme';

const PostTab = (): React.ReactElement => {
  return (
    <AppSafeAreaView edges={['top']} backgroundColor={Colors.white}>
      <AppStatusBar />
      <View style={CommonStyle.main} />
    </AppSafeAreaView>
  );
};

export default PostTab;
