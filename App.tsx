import React from 'react';
import {LogBox} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AppNavigation from './source/routes';

LogBox.ignoreAllLogs();
const App = (): React.ReactElement => {
  return (
    <GestureHandlerRootView>
      <AppNavigation />
    </GestureHandlerRootView>
  );
};

export default App;
