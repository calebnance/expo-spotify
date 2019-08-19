import { StackViewTransitionConfigs } from 'react-navigation';

// the screens you add to "iosModalRoutes" will have the modal transition.
// https://bit.ly/2RmMFRO
const iosModalRoutes = ['ModalMusicPlayer', 'ModalMoreOptions'];

export default (transitionProps, prevTransitionProps) => {
  const isModal = iosModalRoutes.some(
    screenName =>
      screenName === transitionProps.scene.route.routeName ||
      (prevTransitionProps &&
        screenName === prevTransitionProps.scene.route.routeName)
  );

  return StackViewTransitionConfigs.defaultTransitionConfig(
    transitionProps,
    prevTransitionProps,
    isModal
  );
};
