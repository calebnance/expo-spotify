import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { colors } from '../constants';

// grabs stacks
import StackHome from './StackHome';
import StackSearch from './StackSearch';
import StackLibrary from './StackLibrary';

// components
import CustomTabBar from '../components/CustomTabBar';

export default createBottomTabNavigator(
  {
    StackHome,
    StackSearch,
    StackLibrary
  },
  {
    initialRouteName: 'StackHome',
    tabBarComponent: props => <CustomTabBar {...props} />,
    tabBarOptions: {
      activeTintColor: colors.white,
      inactiveTintColor: colors.greyInactive,
      style: {
        backgroundColor: colors.grey,
        borderTopWidth: 0
      }
    }
  }
);
