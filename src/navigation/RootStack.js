import * as React from 'react';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator
} from '@react-navigation/stack';

// navigation
import TabNavigation from './TabNavigation';

// screens
import ModalMusicPlayer from '../screens/ModalMusicPlayer';
import ModalMoreOptions from '../screens/ModalMoreOptions';

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer theme={DarkTheme}>
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        presentation: 'modal'
      }}
    >
      <Stack.Screen
        name="TabNavigation"
        component={TabNavigation}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="ModalMusicPlayer"
        component={ModalMusicPlayer}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="ModalMoreOptions"
        component={ModalMoreOptions}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
