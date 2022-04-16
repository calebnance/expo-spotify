import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import LibraryScreen from '../screens/Library';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Library"
      component={LibraryScreen}
      options={{
        headerShown: false
      }}
    />
  </Stack.Navigator>
);
