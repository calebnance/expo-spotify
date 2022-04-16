import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import SearchScreen from '../screens/Search';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Search"
      component={SearchScreen}
      options={{
        headerShown: false
      }}
    />
  </Stack.Navigator>
);
