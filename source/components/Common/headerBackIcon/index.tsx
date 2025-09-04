// third-party
import {useNavigation} from '@react-navigation/native';
import React from 'react';
// react-native
import {Pressable} from 'react-native';
import {BackArrowIcon} from '../../../theme/svg';
import {Colors, iconSize} from '../../../theme';
import {CommonStyle} from '../../../utils';
import {NavigationProps} from '../../../types';

type Props = {
  onPress?: () => void;
};
const HeaderBackIcon = (props: Props): React.ReactElement => {
  const navigation = useNavigation<NavigationProps>();
  const {
    onPress = () => {
      navigation.goBack();
    },
  } = props;

  return (
    <Pressable style={CommonStyle.iconStyle} onPress={onPress}>
      <BackArrowIcon
        height={iconSize.extraLarge}
        width={iconSize.extraLarge}
        fill={Colors.primary}
      />
    </Pressable>
  );
};
export default HeaderBackIcon;
