// navigation.types.ts
import type {NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Navigations} from '../constant';

export type NotificationTabParams = {notification_type?: string};
export type NotificationTabRouteProp = RouteProp<
  {[Navigations.NOTIFICATION_TAB]: NotificationTabParams},
  Navigations.NOTIFICATION_TAB
>;

export type authNavProps = {
  item: {userId: string; routeType?: string};
  route?: any;
};

// Define the types for your Stack Navigator
export type RootStackParamList = {
  [Navigations.HOME_TABS]: undefined; // No params
  [Navigations.LOGIN]: undefined; // No params
  [Navigations.SIGN_UP]: undefined;
  [Navigations.HOME_TAB]: undefined; // No params
  [Navigations.CATEGORIES_TAB]: undefined;
  [Navigations.POST_TAB]: undefined;

  [Navigations.MENU_TAB]: undefined;
  [Navigations.MY_ACCOUNT_TAB]: undefined;

  [Navigations.NOTIFICATION_TAB]: NotificationTabParams;
  TABS: NavigatorScreenParams<TabParamList>; // Nested Tab Navigator
  // Add more routes here...
};

// Define the types for your Bottom Tab Navigator
export type TabParamList = {DASHBOARD: undefined; SETTINGS: undefined};

// Combine navigation types
export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
// Define types for the notification event
export interface NotificationData {
  data: {
    notification_id: number;
    notification_type: string;
  };
}
