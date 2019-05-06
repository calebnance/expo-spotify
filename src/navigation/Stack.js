import { createAppContainer, createStackNavigator } from 'react-navigation';

// grab navigation
import TabNavigation from './TabNavigation';

// grab screens
import ModalMusicPlayer from '../screens/ModalMusicPlayer';

// grab modal routes (dynamic transitions)
import ModalRoutes from './ModalRoutes';

const StackNavigator = createStackNavigator(
  {
    TabNavigation,

    // Modals
    // /////////////////////////////////////////////////////////////////////////
    ModalMusicPlayer: {
      screen: ModalMusicPlayer,
      navigationOptions: {
        gesturesEnabled: false
      }
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'TabNavigation',
    transitionConfig: ModalRoutes
  }
);

const App = createAppContainer(StackNavigator);

export default App;
