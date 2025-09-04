import {Platform} from 'react-native';

const printData = (title: string): void => {
  console.log(`[${Platform.OS}] ` + JSON.stringify(title, null, 2));
};

export default printData;
