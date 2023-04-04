import * as React from 'react';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// navigation
import TabNavigation from './TabNavigation';

// screens
import ModalMusicPlayer from '../screens/ModalMusicPlayer';
import ModalMoreOptions from '../screens/ModalMoreOptions';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator
        screenOptions={{
          presentation: 'fullScreenModal'
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
            animation: 'slide_from_bottom',
            headerShown: false,
            presentation: 'transparentModal'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
