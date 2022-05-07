import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import HomeScreen from '../screens/Home';
import AlbumScreen from '../screens/Album';

const Stack = createNativeStackNavigator();

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
