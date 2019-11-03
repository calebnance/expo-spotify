import { Dimensions, Platform } from 'react-native';

// android
const android = Platform.OS === 'android';

// is iPhoneX, iPhoneXs, iPhoneXr, iPhoneXs Max
const iOS = Platform.OS === 'ios';
const web = Platform.OS === 'web';
const windowInfo = Dimensions.get('window');
const { height, width } = windowInfo;
const aspectRatio = height / width;

// is iPad
const { isPad } = Platform;

let iPhoneX = false;
if (iOS) {
  // iphone screen breakdown
  // https://www.paintcodeapp.com/news/ultimate-guide-to-iphone-resolutions
  // http://iosres.com
  if (height === 812 || width === 812 || (height === 896 || width === 896)) {
    iPhoneX = true;
  }
}

export default {
  android,
  aspectRatio,
  height,
  iOS,
  iPhoneX,
  isPad,
  web,
  width
};
