// third-party
import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useRef, useState} from 'react';
// react-native
import type {TextInput} from 'react-native';
import {Keyboard, ScrollView, Text, View} from 'react-native';

// Styles
import Styles from './style';
import {NavigationProps} from '../../../types';
import {
  ButtonText,
  ErrorMessage,
  Label,
  PlaceHolder,
  SimpleText,
} from '../../../theme/screenText';
import {emailRegex, Navigations} from '../../../constant';
import {CommonStyle, printData} from '../../../utils';
import {
  AppSafeAreaView,
  AppStatusBar,
  FastImageLoad,
} from '../../../components/Common';
import {Input, InputError} from '../../../components/Inputs';
import {Button} from '../../../components/Buttons';
import {Colors, Images} from '../../../theme';
import {registerUser} from '../../../redux/actions/userActions';

const SignUp = (): React.ReactElement => {
  // Navigation hooks
  const navigation = useNavigation<NavigationProps>();

  const [isName, setIsName] = useState(false);
  const [name, setName] = useState('Hitesh Chauhan');
  const [isEmail, setIsEmail] = useState(false);
  const [email, setEmail] = useState('hitschauhan038@gmail.com');
  const [isMobile, setIsMobile] = useState(false);
  const [mobile, setMobile] = useState('9898529951');
  const [password, setPassword] = useState('Nitsan@123');
  const [isPassword, setIsPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [icon, setIcon] = useState(false);

  const [semPassword, setSemPassword] = useState('Nitsan@123');
  const [repeatrPasswordError, setRepeatPasswordError] = useState('');
  const [isRepeatPassword, setIsRepeatPassword] = useState(false);
  const [passwordSecureText, setPasswordSecureText] = useState(false);
  const [rePasswordSecureText, setRePasswordSecureText] = useState(false);
  const [iconRe, setIconRe] = useState(false);

  const refName = useRef<TextInput | null>(null);
  const refEmail = useRef<TextInput | null>(null);
  const refMobile = useRef<TextInput | null>(null);
  const refPassword = useRef<TextInput | null>(null);
  const refRePassword = useRef<TextInput | null>(null);

  const registerPress = useCallback(async (): Promise<void> => {
    try {
      const formDataToUpload = new FormData();
      formDataToUpload.append('email', email);
      formDataToUpload.append('password', password);
      formDataToUpload.append('name', name);
      formDataToUpload.append('mobile', mobile);
      const response = await registerUser(formDataToUpload);
      if (response.status) {
        navigation.navigate(Navigations.HOME_TABS);
      }
    } catch (e) {
      printData(e + 'registerPress');
    }
  }, []);

  const handleNameValidation = useCallback((val: string): void => {
    setName(val);
    if (val.length === 0) {
      setIsName(true);
    } else {
      setIsName(false);
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
  const handleMobileValidation = useCallback((val: string): void => {
    setMobile(val);
    if (val.length === 0) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
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
      setIsName(true);
    }

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

    if (mobile.length === 0) {
      isValidate = false;
      setIsMobile(true);
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
      registerPress();
    }
  }, [email, name, mobile, password]);

  // Function to show password text
  const changeIconShow = useCallback((): void => {
    setIcon(false);
  }, []);

  // Function to hide password text
  const changeIconHidden = useCallback((): void => {
    setIcon(true);
  }, []);

  // Function to handle repeat password validation
  const handleRepeatPassword = useCallback(
    (val1: string, val2: string): void => {
      if (val1.length === 0) {
        setIsRepeatPassword(true);
        setRepeatPasswordError(ErrorMessage.CONFIRM_PASSWORD);
      } else if (val1 !== val2) {
        setIsRepeatPassword(true);
        setRepeatPasswordError(ErrorMessage.NOT_MATCH);
      } else {
        setIsRepeatPassword(false);
      }
    },
    [],
  );

  // Function to toggle password visibility
  const togglePasswordVisibility = useCallback(
    (isPasswordField: boolean): void => {
      if (isPasswordField) {
        setIcon(prevState => !prevState);
        setPasswordSecureText(prevState => !prevState);
      } else {
        setIconRe(prevState => !prevState);
        setRePasswordSecureText(prevState => !prevState);
      }
    },
    [],
  );

  // Function to handle password change
  const handlePasswordChange = useCallback(
    (val: string): void => {
      setPassword(val);
      // validatePassword(val);

      if (val.length === 0) {
        setIsPassword(true);
        setPasswordError(ErrorMessage.NEW_PASSWORD);
      } else {
        setIsPassword(false);
      }

      if (semPassword.length > 0 && val.length > 0) {
        handleRepeatPassword(semPassword, val);
      } else if (semPassword.length === 0) {
        setIsRepeatPassword(false);
      }
    },
    [
      handleRepeatPassword,
      semPassword,
      // validatePassword
    ],
  );

  // Function to handle repeat password change
  const handleRepeatPasswordChange = useCallback(
    (val: string): void => {
      setSemPassword(val);

      if (password.length > 0 && val.length > 0) {
        handleRepeatPassword(val, password);
      } else if (val.length === 0) {
        setIsRepeatPassword(false);
      }
    },
    [handleRepeatPassword, password],
  );

  // Function to clear data
  const clearData = useCallback((): void => {
    setName('');
    setEmail('');
    setMobile('');
    setPassword('');
    setIsName(false);
    setIsEmail(false);
    setIsMobile(false);
    setIsPassword(false);
    setEmailError('');
    setPasswordError('');
  }, []);

  // Function to handle sign up button press
  const handleSignUp = useCallback((): void => {
    clearData();
    navigation.navigate(Navigations.LOGIN);
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
            <Text style={Styles.headerTitle}>Register</Text>
          </View>
          <View style={Styles.mainTextInput}>
            <Text style={Styles.label}>{Label.NAME}</Text>
            <Input
              ref={refName}
              secure={false}
              value={name}
              onChangeText={(val: string) => handleNameValidation(val)}
              keyboardType="default"
              returnKeyType={'next'}
              onSubmitEditing={() => refEmail.current?.focus()}
            />
            {isName && <InputError message={ErrorMessage.NAME} />}
          </View>
          <View style={Styles.mainTextInput}>
            <Text style={Styles.label}>{Label.EMAIL}</Text>
            <Input
              ref={refEmail}
              secure={false}
              value={email}
              onChangeText={(val: string) => handleEmailValidation(val)}
              keyboardType="default"
              returnKeyType={'next'}
              onSubmitEditing={() => refMobile.current?.focus()}
            />
            {isEmail && <InputError message={emailError} />}
          </View>
          <View style={Styles.mainTextInput}>
            <Text style={Styles.label}>{Label.MOBILE_NUMBER}</Text>
            <Input
              ref={refMobile}
              secure={false}
              value={mobile}
              onChangeText={(val: string) => handleMobileValidation(val)}
              keyboardType="default"
              returnKeyType={'next'}
              onSubmitEditing={() => refPassword.current?.focus()}
            />
            {isMobile && <InputError message={ErrorMessage.MOBILE_NO} />}
          </View>
          <View style={Styles.mainTextInput}>
            <Text style={Styles.label}>{Label.CREATE_PASSWORD}</Text>
            <Input
              ref={refPassword}
              placeholder={PlaceHolder.PASSWORD}
              value={password}
              onChangeText={handlePasswordChange}
              secure={!passwordSecureText}
              onPressShow={() => {
                togglePasswordVisibility(true); // to hide password
              }}
              onPressHidden={() => {
                togglePasswordVisibility(true); // to show password
              }}
              returnKeyType={'next'}
              showEyeIcon={true}
              iconVisible={icon}
              onSubmitEditing={() => {
                if (refRePassword) {
                  refRePassword?.current?.focus();
                }
              }}
            />
            {isPassword && <InputError message={passwordError} />}
          </View>
          <View style={Styles.mainTextInput}>
            <Text style={Styles.label}>{Label.RE_TYPE_PASSWORD}</Text>
            <Input
              ref={refRePassword}
              placeholder={PlaceHolder.PASSWORD}
              value={semPassword}
              onChangeText={handleRepeatPasswordChange}
              secure={!rePasswordSecureText}
              showEyeIcon={true}
              iconVisible={iconRe}
              onPressShow={() => {
                togglePasswordVisibility(false); // to hide password
              }}
              onPressHidden={() => {
                togglePasswordVisibility(false); // to show password
              }}
              onSubmitEditing={Keyboard.dismiss}
            />
            {isRepeatPassword ? (
              <InputError message={repeatrPasswordError} />
            ) : (
              password.length > 0 &&
              semPassword.length > 0 && (
                <InputError
                  message={ErrorMessage.MATCH_PASSWORD}
                  isValid={true}
                />
              )
            )}
          </View>
          <Button
            title={ButtonText.REGISTER}
            style={Styles.button}
            TxColor={Colors.white}
            onPress={handleLogInPress}
          />
        </ScrollView>
        <View style={Styles.bottomView}>
          <Text style={Styles.privacyText}>
            {SimpleText.ALREADY_REGISTERED}
            <Text
              style={[Styles.privacyText, Styles.privacyTextUnderline]}
              onPress={() => handleSignUp()}>
              {SimpleText.LOGIN}
            </Text>
          </Text>
        </View>
      </View>
    </AppSafeAreaView>
  );
};

export default SignUp;
