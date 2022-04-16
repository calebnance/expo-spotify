import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import HomeScreen from '../screens/Home';
import AlbumScreen from '../screens/Album';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false
      }}
    />
    <Stack.Screen
      name="Album"
      component={AlbumScreen}
      options={{
        headerShown: false
      }}
      initialParams={{ title: 'Extraordinary Machine' }}
    />
  </Stack.Navigator>
);
