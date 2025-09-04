// third-party
import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useRef, useState} from 'react';
// react-native
import type {TextInput} from 'react-native';
import {Keyboard, Pressable, ScrollView, Text, View} from 'react-native';

// Styles
import Styles from './style';
// types
import {NavigationProps} from '../../../types';
// theme
import {
  ButtonText,
  ErrorMessage,
  Label,
  PlaceHolder,
  SimpleText,
} from '../../../theme/screenText';
import {Colors, Images} from '../../../theme';
// constants
import {emailRegex, Navigations} from '../../../constant';
// utils
import {CommonStyle, printData} from '../../../utils';
import {toastMessage} from '../../../utils/commonFunction';
// components
import {
  AppSafeAreaView,
  AppStatusBar,
  FastImageLoad,
} from '../../../components/Common';
import {Input, InputError} from '../../../components/Inputs';
import {Button} from '../../../components/Buttons';
import {loggedIn} from '../../../redux/actions/userActions';

const Login = (): React.ReactElement => {
  // Navigation hooks
  const navigation = useNavigation<NavigationProps>();

  const [isEmail, setIsEmail] = useState(false);
  const [email, setEmail] = useState(__DEV__ ? 'adarsh@gmail.com' : '');
  const [password, setPassword] = useState(__DEV__ ? 'Nitsan@123' : '');
  const [isPassword, setIsPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [icon, setIcon] = useState(false);

  const refPassword = useRef<TextInput | null>(null);

  const loginPress = useCallback(async (): Promise<void> => {
    try {
      const formDataToUpload = new FormData();
      formDataToUpload.append('username', email);
      formDataToUpload.append('password', password);
      const response = await loggedIn(formDataToUpload);

      if (response.status) {
        navigation.navigate(Navigations.HOME_TABS);
      }
    } catch (e) {
      printData(e + 'loginPress');
    }
  }, []);

  const handleEmailValidation = useCallback((val: string): void => {
    setEmail(val);
    if (val.length === 0) {
      setIsEmail(true);
      setEmailError(ErrorMessage.EMAIL_NAME);
    } else if (!emailRegex.test(val)) {
      setIsEmail(true);
      setEmailError(ErrorMessage.VALID_EMAIL);
    } else {
      setIsEmail(false);
      setEmailError('');
    }
  }, []);

  const handlePasswordValidation = useCallback((val: string): void => {
    setPassword(val);
    if (val.length === 0) {
      setIsPassword(true);
      setPasswordError(ErrorMessage.PASSWORD);
    } else if (val.length < 8) {
      setIsPassword(true);
      setPasswordError(ErrorMessage.EIGHT_DIGIT);
    } else {
      setIsPassword(false);
      setPasswordError('');
    }
  }, []);

  // Function to handle login button press
  const handleLogInPress = useCallback((): void => {
    let isValidate = true;
    if (email.length === 0) {
      isValidate = false;
      setIsEmail(true);
      setEmailError(ErrorMessage.EMAIL_NAME);
    } else if (!emailRegex.test(email)) {
      isValidate = false;
      setIsEmail(true);
      setEmailError(ErrorMessage.VALID_EMAIL);
    } else {
      setIsEmail(false);
      setEmailError('');
    }
    if (password.length === 0) {
      isValidate = false;
      setIsPassword(true);
      setPasswordError(ErrorMessage.PASSWORD);
    } else if (password.length < 8) {
      isValidate = false;
      setIsPassword(true);
      setPasswordError(ErrorMessage.EIGHT_DIGIT);
    } else {
      setIsPassword(false);
      setPasswordError('');
    }
    if (isValidate) {
      printData('Login data' + email + '  ' + password);
      loginPress();
    }
  }, [email, password]);

  // Function to show password text
  const changeIconShow = useCallback((): void => {
    setIcon(false);
  }, []);

  // Function to hide password text
  const changeIconHidden = useCallback((): void => {
    setIcon(true);
  }, []);

  // Function to clear data
  const clearData = useCallback((): void => {
    setEmail('');
    setPassword('');
    setIsEmail(false);
    setIsPassword(false);
    setEmailError('');
    setPasswordError('');
  }, []);

  // Function to handle forgot password button press
  const handleForgotPassword = useCallback((): void => {
    toastMessage('You Press Forgot password', 500);
  }, [clearData, navigation]);

  // Function to handle sign up button press
  const handleSignUp = useCallback((): void => {
    clearData();
    navigation.navigate(Navigations.SIGN_UP);
  }, [clearData, navigation]);

  return (
    <AppSafeAreaView edges={['top']}>
      <AppStatusBar />

      <View style={Styles.router}>
        <View style={Styles.logoView}>
          <FastImageLoad
            source={Images.AppLogo}
            style={Styles.logoImage}
            resizeMode="contain"
          />
        </View>
        <ScrollView
          style={CommonStyle.main}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={Styles.contentContainerStyle}
          automaticallyAdjustKeyboardInsets={true}>
          <View style={Styles.headerView}>
            <Text style={Styles.headerTitle}>{SimpleText.LOGIN}</Text>
          </View>
          <View style={Styles.mainTextInput}>
            <Text style={Styles.label}>{Label.ENTER_USER_ID}</Text>
            <Input
              secure={false}
              value={email}
              onChangeText={(val: string) => handleEmailValidation(val)}
              keyboardType="default"
              returnKeyType={'next'}
              onSubmitEditing={() => refPassword.current?.focus()}
            />
            {isEmail && <InputError message={emailError} />}
          </View>
          <View style={Styles.mainTextInput}>
            <Text style={Styles.label}>{Label.PASSWORD}</Text>
            <Input
              ref={refPassword}
              placeholder={PlaceHolder.PASSWORD}
              value={password}
              onChangeText={(val: string) => handlePasswordValidation(val)}
              secure={!icon}
              onPressShow={() => changeIconShow()}
              onPressHidden={() => changeIconHidden()}
              showEyeIcon={true}
              iconVisible={icon}
              onSubmitEditing={Keyboard.dismiss}
            />
            {isPassword && <InputError message={passwordError} />}
          </View>
          <View style={Styles.mainHelpForgot}>
            <Pressable onPress={() => handleForgotPassword()}>
              <Text style={Styles.helpForgotText}>
                {ButtonText.FORGOT_PASSWORD}
              </Text>
            </Pressable>
          </View>
          <Button
            title={ButtonText.LOGIN}
            style={CommonStyle.button}
            TxColor={Colors.white}
            onPress={handleLogInPress}
          />
        </ScrollView>
        <View>
          <Text style={Styles.privacyText}>
            {SimpleText.DON_T_HAVE_ACCOUNT}
            <Text
              style={[Styles.privacyText, Styles.privacyTextUnderline]}
              onPress={() => handleSignUp()}>
              {SimpleText.NEW_ACCOUNT}
            </Text>
            {SimpleText.LOGIN_MICROSOFT}
          </Text>
        </View>
      </View>
    </AppSafeAreaView>
  );
};

export default Login;
