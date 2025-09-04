import React from 'react';
import {AppSafeAreaView, AppStatusBar} from '../../../components/Common';
import {Colors} from '../../../theme';

const MyAccountTab = (): React.ReactElement => {
  return (
    <AppSafeAreaView edges={['top']} backgroundColor={Colors.white}>
      <AppStatusBar />
    </AppSafeAreaView>
  );
};

export default MyAccountTab;
