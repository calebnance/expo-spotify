import * as React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation-stack';

// screens
import Home from '../screens/Home';
import Album from '../screens/Album';

// icons
import SvgTabHome from '../components/icons/Svg.TabHome';

const Icon = ({ focused }) => <SvgTabHome active={focused} />;

Icon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

export default createStackNavigator(
  {
    Home,
    Album
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: Icon
    }
  }
);
