import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import SearchScreen from '../screens/Search';

const Stack = createNativeStackNavigator();

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
