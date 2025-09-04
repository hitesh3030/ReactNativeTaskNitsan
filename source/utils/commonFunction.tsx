// third-party
import type {Moment} from 'moment';
import moment from 'moment';
import {Platform, TextStyle} from 'react-native';
import Toast from 'react-native-simple-toast';

// logs
import printData from './logs';
import {reset} from '../routes/navigationService';
import {Navigations} from '../constant';
import {Colors} from '../theme';

// *** Global helpers

export const ScreenOptions = {
  headerShown: false,
  gestureEnabled: true,
  fullScreenGestureEnabled: true,
};

export const clearAsyncData = async (): Promise<void> => {
  try {
    reset(Navigations.LOGIN);
  } catch (e) {
    printData(e + 'clearAsyncData');
  }
};

export const toastMessage = (
  message: string,
  delay = 400,
  duration: number = Toast.LONG,
): void => {
  setTimeout(
    () => Toast.show(message, duration),
    Platform.OS === 'ios' ? delay : 0,
  );
};

export const checkError = async (
  err: any,
  errorMsg = 'An error occurred',
): Promise<void> => {
  try {
    if ([400, 417, 406, 403, 401, 429, 409, 500, 503].includes(err)) {
      toastMessage(errorMsg, 500);
    }
  } catch (error) {
    console.log('checkError:', error);
  }
};

export const formateDate = (
  date: string | Date | Moment,
  format: string,
): string => {
  return moment(date).format(format);
};

// Helper function to safely parse numbers
export const parseAmount = (value: any): string | number => {
  const parsed = value;
  return isNaN(parsed) ? '' : parsed;
};

export const parseAmountSafely = (value: string): number => {
  const parsed = parseFloat(value);
  return isNaN(parsed) ? 0 : parseFloat(parsed.toFixed(2));
};

export const formatValue = (val: number): string => {
  const num = Number(val);
  return Number.isInteger(num) ? num.toString() : num.toFixed(2);
};

export function toBoolean(value: number): boolean {
  return value === 1;
}

export const isValid18YearsOld = (dob: string): boolean => {
  const dobDate = new Date(dob);
  const today = new Date();

  const age = getYearDiff(dobDate, today);
  return age >= 18;
};

export const isJoiningAfterDOB = (
  dob: string,
  joiningDate: string,
): boolean => {
  if (!dob || !joiningDate) return true;
  return new Date(joiningDate) > new Date(dob);
};

export const isAtLeast18YearsBetween = (
  dob: string,
  joiningDate: string,
): boolean => {
  if (!dob || !joiningDate) return true;
  const dobDate = new Date(dob);
  const joining = new Date(joiningDate);
  const yearDiff = getYearDiff(dobDate, joining);
  return yearDiff >= 18;
};

const getYearDiff = (startDate: Date, endDate: Date): number => {
  const yearDiff = endDate.getFullYear() - startDate.getFullYear();
  const monthDiff = endDate.getMonth() - startDate.getMonth();
  const dayDiff = endDate.getDate() - startDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    return yearDiff - 1;
  }
  return yearDiff;
};

// Transform form data
export const transformFormData = (
  data: Record<string, any>,
): Record<string, any> => {
  const transformedData: Record<string, any> = {};

  Object?.keys(data)?.forEach(field_name => {
    if (field_name === 'country') {
      // Include only label for country
      transformedData[field_name] = data[field_name]?.label || '';
    } else if (['geo_city', 'geo_country', 'geo_state'].includes(field_name)) {
      // Include only value for geo_city, geo_country, and geo_state
      transformedData[field_name] = data[field_name]?.value || '';
    } else if (
      [
        'branch_id',
        'department_id',
        'leave_type_id',
        'general_template',
        'department_template',
        'contract_name_id',
        'open_shift',
      ].includes(field_name)
    ) {
      // Include only value for branch_id and department_id
      transformedData[field_name] = data[field_name]?.id || '';
    } else if (
      ['wage_type', 'expire_duration', 'fixed_types', 'duration_type'].includes(
        field_name,
      )
    ) {
      // Include only value for wage_type
      transformedData[field_name] = data[field_name]?.value || '';
    } else if (field_name === 'leave_policy_ids') {
      // Include only label for country
      transformedData[field_name] = data?.[field_name]?.join(',') || '';
    } else {
      // Keep other fields as they are
      transformedData[field_name] = data[field_name];
    }
  });

  return transformedData;
};

// Get initial text from name
export const getInitialText = (name: string): string => {
  return name
    .split(' ')
    .map((word: string) => word.charAt(0))
    .slice(0, 2) // Take only the first two characters
    .join('')
    .toUpperCase();
};

// Get initial text from name with the first letter capitalized
export const getRandomStringToBrightColor = (string = ''): string => {
  let hash = 0;
  let i;

  for (i = 0; i < string?.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    let value = (hash >> (i * 8)) & 0xff;
    // Make the color bright by ensuring each color component is at least 128 and at most 255
    value = Math.min(value + 128, 255);
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
};

// Function to format a digit input
export const formatDigitInput = (text: string): string => {
  // Remove invalid characters
  let cleanedVal = text.replace(/[^\d.]/g, ''); // Keep digits and a single decimal point
  cleanedVal = cleanedVal.replace(/(\..*?)\./g, '$1'); // Allow only one decimal point

  // Limit to two decimal places
  const parts = cleanedVal.split('.');
  if (parts.length > 1) {
    cleanedVal = `${parts[0]}.${parts[1].slice(0, 2)}`; // Limit decimal part to 2 digits
  }

  return cleanedVal;
};

export const getTabBarLabelColors: (
  status?: boolean,
) => TextStyle = status => ({
  color: status ? Colors.pendingLeaveType : Colors.white,
});
