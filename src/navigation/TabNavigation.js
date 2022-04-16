import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../constants';

// navigation stacks
import StackHome from './StackHome';
import StackSearch from './StackSearch';
import StackLibrary from './StackLibrary';

// components
import CustomTabBar from '../components/CustomTabBar';

// icons
import SvgTabHome from '../components/icons/Svg.TabHome';
import SvgTabLibrary from '../components/icons/Svg.TabLibrary';
import SvgTabSearch from '../components/icons/Svg.TabSearch';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused }) => {
        let icon = <SvgTabHome active={focused} />;

        if (route.name === 'StackSearch') {
          icon = <SvgTabSearch active={focused} />;
        } else if (route.name === 'StackLibrary') {
          icon = <SvgTabLibrary active={focused} />;
        }

        return icon;
      }
    })}
    tabBar={(props) => <CustomTabBar {...props} />}
    tabBarOptions={{
      activeTintColor: colors.white,
      inactiveTintColor: colors.greyInactive
    }}
  >
    <Tab.Screen
      name="StackHome"
      component={StackHome}
      options={{
        tabBarLabel: 'Home'
      }}
    />
    <Tab.Screen
      name="StackSearch"
      component={StackSearch}
      options={{
        tabBarLabel: 'Search'
      }}
    />
    <Tab.Screen
      name="StackLibrary"
      component={StackLibrary}
      options={{
        tabBarLabel: 'Library'
      }}
    />
  </Tab.Navigator>
);
