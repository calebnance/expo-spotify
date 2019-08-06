import { createAppContainer, createStackNavigator } from 'react-navigation';

// grab navigation
import TabNavigation from './TabNavigation';

// grab screens
import ModalMusicPlayer from '../screens/ModalMusicPlayer';
import ModalMoreOptions from '../screens/ModalMoreOptions';

// grab modal routes (dynamic transitions)
import ModalRoutes from './ModalRoutes';

const StackNavigator = createStackNavigator(
  {
    // Modals
    // /////////////////////////////////////////////////////////////////////////
    ModalMusicPlayer: {
      screen: ModalMusicPlayer,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
    ModalMoreOptions: {
      screen: ModalMoreOptions,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
    TabNavigation
  },
  {
    headerMode: 'none',
    initialRouteName: 'TabNavigation',
    transitionConfig: ModalRoutes,
    transparentCard: true,
    mode: 'modal'
  }
);

const App = createAppContainer(StackNavigator);

export default App;
