// navigations
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
// react-native
import {Text, View} from 'react-native';

import {navigationRef} from './navigationService';
import {RootStackParamList} from '../types';
import {getTabBarLabelColors, ScreenOptions} from '../utils/commonFunction';
import {Navigations} from '../constant';
import {Login, SignUp} from '../screens/authentication';
import {AppSafeAreaView} from '../components/Common';
import {Colors} from '../theme';
import {CommonStyle} from '../utils';
import {
  HomeTab,
  MenuTab,
  MyAccountTab,
  PostTab,
  VideosTab,
} from '../screens/home';
import {TabName} from '../theme/screenText';
import {HomeIcon} from '../theme/svg';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();

const AppNavigation = (): React.ReactElement => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={ScreenOptions}
        initialRouteName={Navigations.LOGIN}>
        <Stack.Screen
          name={Navigations.LOGIN}
          component={Login}
          options={{
            animation: 'slide_from_right',
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name={Navigations.SIGN_UP}
          component={SignUp}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name={Navigations.HOME_TABS}
          component={HomeTabs}
          options={{
            animation: 'slide_from_right',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const HomeTabs = (): React.ReactElement => {
  return (
    <AppSafeAreaView edges={['bottom']} backgroundColor="#000">
      {/* <NotificationListener /> */}
      <Tab.Navigator
        initialRouteName={Navigations.HOME_TAB}
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: Colors.pendingLeaveType,
          tabBarInactiveTintColor: Colors.white,
          tabBarStyle: CommonStyle.tabBarStyle,
          tabBarShowLabel: true,
        }}>
        <Tab.Screen
          name={Navigations.HOME_TAB}
          component={HomeTab}
          options={{
            tabBarLabel({focused}: {focused: boolean}) {
              return (
                <Text
                  style={[
                    CommonStyle.tabBarLabelStyle,
                    getTabBarLabelColors(focused),
                  ]}>
                  {TabName.HOME}
                </Text>
              );
            },
            tabBarIcon: ({focused}: {focused: boolean}) => (
              <HomeIcon
                fill={focused ? Colors.pendingLeaveType : Colors.white}
              />
            ),
          }}
        />

        <Tab.Screen
          name={Navigations.CATEGORIES_TAB}
          component={VideosTab}
          options={{
            tabBarLabel({focused}: {focused: boolean}) {
              return (
                <Text
                  style={[
                    CommonStyle.tabBarLabelStyle,
                    getTabBarLabelColors(focused),
                  ]}>
                  {TabName.CATEGORIES}
                </Text>
              );
            },
            tabBarIcon: ({focused}: {focused: boolean}) => (
              <HomeIcon
                fill={focused ? Colors.pendingLeaveType : Colors.white}
              />
            ),
          }}
        />
        <Tab.Screen
          name={Navigations.MY_ACCOUNT_TAB}
          component={MyAccountTab}
          options={{
            tabBarLabel({focused}: {focused: boolean}) {
              return (
                <Text
                  style={[
                    CommonStyle.tabBarLabelStyle,
                    getTabBarLabelColors(focused),
                  ]}>
                  {TabName.MY_ACCOUNT}
                </Text>
              );
            },
            tabBarIcon: ({focused}: {focused: boolean}) => (
              <HomeIcon
                fill={focused ? Colors.pendingLeaveType : Colors.white}
              />
            ),
          }}
        />
        <Tab.Screen
          name={Navigations.MENU_TAB}
          component={MenuTab}
          options={{
            tabBarLabel({focused}: {focused: boolean}) {
              return (
                <Text
                  style={[
                    CommonStyle.tabBarLabelStyle,
                    getTabBarLabelColors(focused),
                  ]}>
                  {TabName.FAVORITES}
                </Text>
              );
            },
            tabBarIcon: ({focused}: {focused: boolean}) => (
              <HomeIcon
                fill={focused ? Colors.pendingLeaveType : Colors.white}
              />
            ),
          }}
        />
        <Tab.Screen
          name={Navigations.POST_TAB}
          component={PostTab}
          options={{
            tabBarLabel({focused}: {focused: boolean}) {
              return (
                <Text
                  style={[
                    CommonStyle.tabBarLabelStyle,
                    getTabBarLabelColors(focused),
                  ]}>
                  {TabName.OFFLINE_VIEW}
                </Text>
              );
            },
            tabBarIcon: ({focused}: {focused: boolean}) => (
              <HomeIcon
                fill={focused ? Colors.pendingLeaveType : Colors.white}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </AppSafeAreaView>
  );
};
export default AppNavigation;
