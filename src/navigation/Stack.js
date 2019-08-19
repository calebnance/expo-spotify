import { createAppContainer, createStackNavigator } from 'react-navigation';

// modal routes (dynamic transitions)
import ModalRoutes from './ModalRoutes';

// navigation
import TabNavigation from './TabNavigation';

// screens
import ModalMusicPlayer from '../screens/ModalMusicPlayer';
import ModalMoreOptions from '../screens/ModalMoreOptions';

const StackNavigator = createStackNavigator(
  {
    // Main Tab Navigation
    // /////////////////////////////////////////////////////////////////////////
    TabNavigation,

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
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'TabNavigation',
    mode: 'modal',
    transitionConfig: ModalRoutes,
    transparentCard: true
  }
);

const App = createAppContainer(StackNavigator);

export default App;
