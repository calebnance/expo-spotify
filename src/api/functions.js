import { Image } from 'react-native';
import { Asset, Font, Permissions } from 'expo';

import preloadFonts from './preloadFonts';
import preloadImages from './preloadImages';

// cache fonts
// /////////////////////////////////////////////////////////////////////////////
export const cacheFonts = fonts => {
  const mappedFonts = fonts.map(font => Font.loadAsync(font));

  return mappedFonts;
};

// cache images
// /////////////////////////////////////////////////////////////////////////////
export const cacheImages = images => {
  const imagesArray = Object.values(images);

  return imagesArray.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    }

    return Asset.fromModule(image).downloadAsync();
  });
};

// preload async
// /////////////////////////////////////////////////////////////////////////////
export const loadAssetsAsync = () => {
  // preload assets
  const fontAssets = cacheFonts(preloadFonts);
  const imageAssets = cacheImages(preloadImages);

  // promise load all
  return Promise.all([...fontAssets, ...imageAssets]);
};

// camera permissions
// /////////////////////////////////////////////////////////////////////////////
export const cameraAccessAsync = async () => {
  // get exisiting camera permissions first
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.CAMERA
  );
  let finalStatus = existingStatus;

  // ask again to grant camera permissions (if not already allowed)
  if (existingStatus !== 'granted') {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    finalStatus = status;
  }

  return finalStatus === 'granted';
};
