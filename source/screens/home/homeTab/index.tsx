// third-party
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {Drawer} from 'react-native-drawer-layout';
import {AppSafeAreaView, AppStatusBar} from '../../../components/Common';
import {Colors, Metrics} from '../../../theme';
import {MenuIcon, NotificationIcon, UserIcon} from '../../../theme/svg';
import Styles from './style';
import {CommonStyle} from '../../../utils';

const HomeTab = (): React.ReactElement => {
  const [open, setOpen] = React.useState(false);
  return (
    <Drawer
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderDrawerContent={() => {
        return (
          <AppSafeAreaView edges={['top']} backgroundColor={Colors.black}>
            <AppStatusBar contentType="light-content" />
            <View style={Styles.drawerContainer}>
              <View
                style={[
                  Styles.itemContainer,
                  {
                    borderBottomWidth: Metrics.rfv(0.5),
                    borderBottomColor: Colors.outline,
                  },
                ]}>
                <UserIcon fill={Colors.pendingLeaveType} />
                <Text style={Styles.itemTitle}>Hello Stephen</Text>
              </View>

              <Pressable style={Styles.itemContainer}>
                <UserIcon fill={Colors.pendingLeaveType} />
                <Text style={Styles.itemTitle}>Videos</Text>
              </Pressable>

              <Pressable style={Styles.itemContainer}>
                <UserIcon fill={Colors.pendingLeaveType} />
                <Text style={Styles.itemTitle}>Documents</Text>
              </Pressable>

              <Pressable style={Styles.itemContainer}>
                <UserIcon fill={Colors.pendingLeaveType} />
                <Text style={Styles.itemTitle}>Favorites</Text>
              </Pressable>

              <Pressable style={Styles.itemContainer}>
                <UserIcon fill={Colors.pendingLeaveType} />
                <Text style={Styles.itemTitle}>Offline View</Text>
              </Pressable>

              <Pressable style={Styles.itemContainer}>
                <UserIcon fill={Colors.pendingLeaveType} />
                <Text style={Styles.itemTitle}>Account Settings</Text>
              </Pressable>

              <Pressable style={Styles.itemContainer}>
                <UserIcon fill={Colors.pendingLeaveType} />
                <Text style={Styles.itemTitle}>Contact Us</Text>
              </Pressable>

              <Pressable
                style={[
                  Styles.itemContainer,
                  {
                    borderTopWidth: Metrics.rfv(0.5),
                    borderTopColor: Colors.outline,
                    marginVertical: Metrics.rfv(10),
                  },
                ]}>
                <UserIcon fill={Colors.pendingLeaveType} />
                <Text style={Styles.itemTitle}>Logout</Text>
              </Pressable>
            </View>
          </AppSafeAreaView>
        );
      }}>
      <AppSafeAreaView edges={['top']} backgroundColor={Colors.black}>
        <AppStatusBar contentType="light-content" />
        <View style={Styles.container}>
          <View style={Styles.headerContainer}>
            <View style={CommonStyle.row}>
              <MenuIcon
                fill={Colors.white}
                style={Styles.iconView}
                onPress={() => setOpen(prevOpen => !prevOpen)}
              />
              <UserIcon fill={Colors.white} style={Styles.iconView} />
              <NotificationIcon fill={Colors.white} />
            </View>
            <View>
              <Text style={Styles.title}>medartis</Text>
            </View>
          </View>
        </View>
      </AppSafeAreaView>
    </Drawer>
  );
};

export default HomeTab;
