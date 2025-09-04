export enum Navigations {
  // authentication
  LOGIN = 'Login',
  SIGN_UP = 'SignUp',
  // Dashboard
  HOME_TABS = 'HomeTabs',
  HOME_TAB = 'homeTab',
  CATEGORIES_TAB = 'VideosTab',
  POST_TAB = 'PostTab',
  MY_ACCOUNT_TAB = 'MyAccountTab',
  NOTIFICATION_TAB = 'NotificationTab',
  MENU_TAB = 'MenuTab',
}

export const BASE_URL = 'https://medartis-app.thebetaspace.com/api';

export const expectedOTP = '1234';

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const vatNumberRegex = /^(?:[A-Z]{2}\d{9}|\d{9})$/;

export const urlPatternRegex =
  /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/;

export const generalUrlRegex =
  /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/\S*)?$/i;

export const ukPhoneNumberRegex =
  /^(?:\+44|0044|0)?[\s-]?7\d{3}[\s-]?\d{3}[\s-]?\d{3}$/gm;

export const nationalInsurance = /^[a-zA-Z0-9]{9}$/;

export const mobileNumberRegex = /^[0-9]{10,11}$/;

export const accountNumberRegex = /^[0-9]{8}$/;

export const sortCodeRegex = /^\d{2}-\d{2}-\d{2}$/;

export const Gender = ['male', 'female'];

export const Marital = ['single', 'married'];

export const TIRAMISU_VERSION_CODE = 33;

export const floatNumberRegex = /^-?\d*(\.\d{0,2})?$/;

export const lowerLaterRegex = /[a-z]/;

export const upperLaterRegex = /[A-Z]/;

export const numberLaterRegex = /\d/;

export const specialLaterRegex = /[!@#$%^&*(),.?":{}|<>]/;

export const MAX_FILE_SIZE = 5 * 1024 * 1024;

export const pageSize = 10;
