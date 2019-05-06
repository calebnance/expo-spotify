import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/Home';
import SvgTabHome from '../components/icons/Svg.TabHome';

const Icon = ({ focused }) => <SvgTabHome active={focused} />;

Icon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

export default createStackNavigator(
  {
    HomeMain: {
      screen: HomeScreen
    }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: Icon
    }
  }
);
