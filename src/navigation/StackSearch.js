import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import SearchScreen from '../screens/Search';

const Stack = createNativeStackNavigator();

function StackSearch() {
  return (
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
}

export default StackSearch;
