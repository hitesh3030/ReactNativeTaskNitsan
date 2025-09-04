import { Platform } from 'react-native';
import type { Permission, PermissionStatus } from 'react-native-permissions';
import {
  check,
  PERMISSIONS,
  request,
  requestMultiple,
  RESULTS,
} from 'react-native-permissions';

import { TIRAMISU_VERSION_CODE } from '@/constant';

import { toastMessage } from './commonFunction';
import printData from './logs';

/**
 * Maps a PermissionStatus to a readable string.
 * @param status - The permission status to map.
 * @returns A string representation of the status.
 */
export const getPermissionStatusMessage = (
  status: PermissionStatus
): string => {
  switch (status) {
    case RESULTS.UNAVAILABLE:
      return 'Unavailable';
    case RESULTS.DENIED:
      return 'Denied';
    case RESULTS.GRANTED:
      return 'Granted';
    case RESULTS.BLOCKED:
      return 'Blocked';
    default:
      return 'Unknown'; // Handle unexpected results
  }
};

export const checkGalleryPermission = async (): Promise<string> => {
  try {
    const permission =
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.PHOTO_LIBRARY
        : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE;
    const result = await request(permission);
    return getPermissionStatusMessage(result);
  } catch (error) {
    printData('Error requesting photo permission: ' + error);
    return 'Error'; // Explicitly return a string on error
  }
};

export const checkWriteStoragePermission = async (): Promise<string> => {
  try {
    if (Platform.OS === 'android') {
      const result = await request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
      return getPermissionStatusMessage(result);
    } else {
      console.log('Permission request skipped for non-Android platform.');
      return 'Granted';
    }
  } catch (error) {
    printData('Error requesting photo permission: ' + error);
    return 'Error'; // Explicitly return a string on error
  }
};

export const check_all_permissions_once = async (): Promise<boolean> => {
  try {
    const ios_permissions: Permission[] = [PERMISSIONS.IOS.PHOTO_LIBRARY];

    const android_permissions: Permission[] =
      (Platform.Version as number) < TIRAMISU_VERSION_CODE
        ? [
            PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
            PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
          ]
        : [PERMISSIONS.ANDROID.READ_MEDIA_IMAGES];

    // Determine permissions based on the platform
    const permissionsToRequest: Permission[] =
      Platform.OS === 'ios' ? ios_permissions : android_permissions;

    // Request multiple permissions
    const result: Record<Permission, PermissionStatus> = await requestMultiple(
      permissionsToRequest
    );

    printData('Permissions result:' + result);

    return true; // If successful, return true
  } catch (error) {
    console.error('Error checking permissions:', error);
    return false; // Return false in case of any error
  }
};

export const check_single_permission = async (
  permission: Permission
): Promise<PermissionStatus> => {
  return check(permission);
};

export const request_single_permission = async (
  permission: Permission
): Promise<boolean> => {
  let granted = false;
  await request(permission).then((result) => {
    if (result === RESULTS.GRANTED) {
      granted = true;
    } else {
      granted = false;
    }
  });
  return granted;
};

export const request_multiple_permission = async (
  permission: Permission[]
): Promise<boolean> => {
  const [PERMISSION_1, PERMISSION_2] = permission;
  let granted = false;
  await requestMultiple(permission).then((newStatuses) => {
    if (
      newStatuses[PERMISSION_1] === RESULTS.GRANTED &&
      newStatuses[PERMISSION_2] === RESULTS.GRANTED
    ) {
      granted = true;
    } else if (
      (newStatuses[PERMISSION_1] === RESULTS.GRANTED &&
        newStatuses[PERMISSION_2] === RESULTS.DENIED) ||
      (newStatuses[PERMISSION_1] === RESULTS.DENIED &&
        newStatuses[PERMISSION_2] === RESULTS.GRANTED)
    ) {
      granted = false;
    } else {
      granted = false;
    }
  });
  return granted;
};

export const checkPermissionWriteStorage = async (): Promise<boolean> => {
  const android_permission =
    (Platform.Version as number) < TIRAMISU_VERSION_CODE
      ? PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE
      : PERMISSIONS.ANDROID.READ_MEDIA_IMAGES;

  const status = await check_single_permission(android_permission);
  let granted = false;

  if (status === RESULTS.UNAVAILABLE) {
    granted = false;
    toastMessage('Storage not available', 500);
  } else if (status === RESULTS.BLOCKED) {
    granted = false;
    toastMessage('Storage blocked', 500);
  } else {
    if (status === RESULTS.DENIED) {
      granted = await request_single_permission(android_permission);
    } else if (status === RESULTS.GRANTED) {
      granted = true;
    } else {
      granted = false;
      toastMessage('Storage denied', 500);
    }
  }
  return granted;
};

export const checkPermissionReadStorage = async (): Promise<boolean> => {
  const ios_permission = PERMISSIONS.IOS.PHOTO_LIBRARY;
  const android_permission =
    (Platform.Version as number) < TIRAMISU_VERSION_CODE
      ? PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
      : 'android.permission.READ_MEDIA_IMAGES';
  const status = await check_single_permission(
    Platform.OS === 'ios' ? ios_permission : android_permission
  );
  let granted = false;
  if (status === RESULTS.UNAVAILABLE) {
    granted = false;
    toastMessage('Permission Unavailable', 500);
  } else if (status === RESULTS.BLOCKED) {
    granted = false;
    toastMessage('Permission Blocked.', 500);
  } else {
    if (status === RESULTS.DENIED) {
      granted = await request_single_permission(
        Platform.OS === 'ios' ? ios_permission : android_permission
      );
    } else if (status === RESULTS.GRANTED) {
      granted = true;
    } else {
      granted = false;
      toastMessage('Permission Denied.', 500);
    }
  }
  return granted;
};
