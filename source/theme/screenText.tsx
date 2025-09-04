export const ScreenTextDesc = {
  APP_NAME: 'Medmarket MD',
  CUSTOMER_LOGIN: 'Sign in',
  CUSTOMER_SIGNUP: 'Create a free account',
  CREATE_NEW_CONTRACT: 'Create New Contract',
  LOGIN_INTRO: 'Sign in to your account',
  SIGNUP_INTRO: 'Sign up as a Buyer or Seller',
  BECOME_A_SELLER: 'Become A Seller',
  ALREADY_CUSTOMER: 'Already an Medmarket MD Customer?',
  ACCEPT_TERMS: 'I Agree to Terms and Conditions',
  LOGIN_PIN_INTRO:
    'For your security, please set a 4-digit PIN. You\nwill use this PIN to verify your identity\neach time you open the app.',
  LOGIN_ENTER_PIN_INTRO: 'Please enter your 4-digit PIN.',
  FORGOT_PASSWORD: 'Forgot Password?',
  VERIFICATION_CODE: 'Verification Code',
  FORGOTPIN_INTRO:
    'Don’t worry! it happens. Please enter phone number associated with your account',
  FORGOT_PASSWORD_INTRO:
    'Enter your email address to get the password reset link.',
  ENTER_VERIFICATION_CODE:
    'Enter the verification code that we have sent to your email',
  RESET_PASSWORD: 'Reset Your Password',
  RESET_PASSWORD_DESC: 'Now you can reset your old password',
  MAINTENANCE_TITLE: "We'll be back shortly!",
  MAINTENANCE_NOTE:
    "We're currently making improvements to serve you better. Thank you for your patience!",
  HOURS: 'Hours',
  SIGN_IN_TEXT: 'Sign in to personalize your experience.',
  DAILY_DEALS: 'Daily Deals & Offers',
  EXPLORE_ALL: 'Explore All',
  MEDICAL_SPECIALTIES: 'Medical Specialties',
};

export enum SimpleText {
  NO_DATA_FOUND = 'No Data Found',
  MANDATORY = '*',
  DON_T_HAVE_ACCOUNT = 'Create ',
  ALREADY_REGISTERED = 'Already Registered?  ',
  NEW_ACCOUNT = 'New Account',
  LOGIN_MICROSOFT = '    Login with Mictrosoft Azure',
  SIGN_UP = 'Sign Up',
  LOGIN = 'Login',
  NO_RESULT_FOUND_INFO = "We couldn't find any matches. \n Try changing your search.",
}

export const AppHeaderText = {};

export const ButtonText = {
  LOGIN: 'LOGIN',
  REGISTER: 'REGISTER',
  SUBMIT: 'Submit',
  CANCEL: 'CANCEL',
  PASSWORD_RESET: 'Password Reset',
  FORGOT_PASSWORD: 'Forgot Password?',
  DONE: 'DONE',
  REFRESH: 'Refresh',
  RELOAD_APP: 'Reload App',
  CONTINUE: 'Continue',
  CREATE_ACCOUNT: 'Create an account',
};

export const Label = {
  FIRST_NAME: 'First Name*',
  LAST_NAME: 'Last Name*',
  ENTER_USER_ID: 'EnterUserId',
  NAME: 'Name*',
  PASSWORD: 'Enter Password',
  EMAIL: 'Email*',
  MOBILE_NUMBER: 'Mobile No.*',
  CUSTOMER_PASSWORD: 'Password*',
  CREATE_PASSWORD: 'Create Password*',
  RE_TYPE_PASSWORD: 'Re-Type Password*',
  CUSTOMER_CONFIRM_PASSWORD: 'Confirm Password*',
  NEW_PASSWORD: 'Enter a new password',
  CONFIRM_PASSWORD: 'Confirm new password',
  EMAIL_ADDRESS: 'Email Address',
  PASSWORD_CONDITION: 'Your password must have:',
};

export const PlaceHolder = {
  USERNAME: 'Enter your email',
  CUSTOMER_FIRST_NAME: 'Enter your first Name',
  CUSTOMER_LAST_NAME: 'Enter your last Name',
  CUSTOMER_MOBILE: 'Enter your mobile number',
  PASSWORD: '**********',
  CONFIRM_PASSWORD: 'Enter your confirm password',
  SEARCH_HERE: 'Search Here...',
};

export const ErrorMessage = {
  NAME: 'Please enter name',
  MOBILE_NO: 'Please enter mobile no',
  EMAIL: 'Please enter email',
  EMAIL_NAME: 'Please enter your email',
  PASSWORD: 'Please enter password',
  EIGHT_DIGIT: 'Password must be at least 8 characters',
  VALID_EMAIL: 'Please enter valid email',
  NEW_PASSWORD: 'New Password is required',
  CONFIRM_PASSWORD: 'Confirm Password is required',
  NOT_MATCH: 'Password Does Not Match',
  MATCH_PASSWORD: 'Password is Match',
  INTERNET_MESSAGE_TITLE: 'Oops ! internet connection lost',
  INTERNET_MESSAGE: 'We will be right back when connection re establish!',
  AT_LEAST_8_CHARACTERS: 'At least 8 characters long.',
  AT_LEAST_ONE_LOWERCASE_CHARACTERS: 'At least one lowercase character.',
  AT_LEAST_ONE_UPPERCASE_CHARACTERS: 'At least one uppercase character.',
  AT_LEAST_ONE_NUMBER: 'At least one number.',
  ENTER_PIN: 'Please enter PIN',
  AT_LEAST_ONE_SPECIAL_CHARACTERS: 'At least one special character.',
  NEW_PASSWORD_INVALID: 'New Password is invalid',
  SOMETHING_WENT_WRONG: 'Something went wrong.',
};

export const TabName = {
  HOME: 'Home',
  MY_ACCOUNT: 'Documents',
  FAVORITES: 'Favorites',
  OFFLINE_VIEW: 'Offline View',
  CATEGORIES: 'Video',
  POST: 'Post',
  MENU: 'Menu',
};

export const ApiError = {
  checkInternet: 'Please check your internet connection',
  requiredProfileCompletion: `Your profile is incomplete! \nPlease update it in My Account to start onboarding.`,
};

export enum DateFormat {
  DD_MM_YYYY = 'DD/MM/YYYY',
  DD_MM_YYYY_HH_MM_SS_A = 'DD/MM/YYYY hh:mm A',
  YYYY_MM_DD = 'YYYY-MM-DD',
  YYYY_MM = 'YYYY-MM',
  MM_YYYY = 'MM/YYYY',
  DDD_D_MMM_YYYY = 'ddd D MMM YYYY',
  YYYY_MM_DD_HH_MM_SS_A = 'YYYY-MM-DD hh:mm A',
  DD_MM_YYYY__HH_MM_SS_A = 'DD-MM-YYYY hh:mm A',
  MM_DD_YYYY = 'MM/DD/YYYY',
  YYYY_MM_DD_HH_MM_SS = 'YYYY-MM-DD HH:mm:ss',
  DD_MM_YYYY_HH_MM_SS = 'DD/MM/YYYY HH:mm:ss',
  MM_DD_YYYY_HH_MM_SS = 'MM/DD/YYYY HH:mm:ss',
  DO_MMMM_YYYY = 'Do MMMM YYYY',
  DD_MM_YYYY_HH_MM = 'DD/MM/YYYY HH:mm',
  YYYY_MM_DD_HH_MM = 'YYYY-MM-DD HH:mm',
  MM_DD_YYYY_HH_MM = 'MM/DD/YYYY HH:mm',
  DD_MMM_YYYY = 'DD MMM YYYY',
  MMM_DD_YYYY = 'MMM DD, YYYY',
  YYYY_MMM_DD = 'YYYY MMM DD',
  DD_MMMM_YYYY = 'DD MMMM YYYY',
  MMMM_DD_YYYY = 'MMMM DD, YYYY',
  YYYY_MMMM_DD = 'YYYY MMMM DD',
  DD_MM_YY = 'DD/MM/YY',
  MM_DD_YY = 'MM/DD/YY',
  YY_MM_DD = 'YY-MM-DD',
  ISO_8601 = 'YYYY-MM-DDTHH:mm:ssZ',
  RFC_2822 = 'ddd, DD MMM YYYY HH:mm:ss Z',
}

export enum TimeFormat {
  HH_MM_SS = 'HH:mm:ss', // Hours:Minutes:Seconds
  HH_MM = 'HH:mm', // Hours:Minutes
  HH_MM_SS_A = 'hh:mm:ss A', // Hours:Minutes:Seconds AM/PM
  HH_MM_A = 'hh:mm a', // Hours:Minutes AM/PM
  HH_MM_SS_24 = 'HH:mm:ss', // 24-hour Hours:Minutes:Seconds
  HH_MM_24 = 'HH:mm', // 24-hour Hours:Minutes
  HH_MM_SS_MS = 'HH:mm:ss.SSS', // Hours:Minutes:Seconds:Milliseconds
  HH_MM_SS_Z = 'HH:mm:ss Z', // Hours:Minutes:Seconds Timezone
  HH_MM_SS_A_Z = 'hh:mm:ss A Z', // Hours:Minutes:Seconds AM/PM Timezone
  HH_MM_SS_24_Z = 'HH:mm:ss Z', // 24-hour Hours:Minutes:Seconds Timezone
  HH_MM_SS_UTC = 'HH:mm:ss UTC', // Hours:Minutes:Seconds UTC
  HH_MM_SS_TZ_OFFSET = 'HH:mm:ss ZZZ', // Hours:Minutes:Seconds with Offset
}

export enum ApiText {
  PENDING = 'pending',
  COMPLETED = 'completed',
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  DRAFT = 'draft',
  ACCEPTED = 'accepted',
  RE_INVITED = 'reinvited',
  INVITED = 'invited',
  IN_DISCUSSION = 'in-discussion',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  REOPENED = 'reopened',
  CLOSED = 'closed',
  CANCELED = 'cancelled',
  HOLIDAY = 'holiday',
  DAY_OFF = 'day_off',
  DAY_OFF_HOLIDAY = 'day_off_holiday',
  CONFIRMED = 'confirmed',
  PROBATION = 'probation',
  EXPIRED = 'expired',
  EXPIRY_SOON = 'expiry soon',
  AWAITING_SIGNATURE = 'awaiting signature',
  INCOME = 'income',
  OTHER = 'other',
  EXPENCE = 'expense',
}
