import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation';

import LibraryScreen from '../screens/Library';
import SvgTabLibrary from '../components/icons/Svg.TabLibrary';

const Icon = ({ focused }) => <SvgTabLibrary active={focused} />;

Icon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

export default createStackNavigator(
  {
    LibraryMain: {
      screen: LibraryScreen
    }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      tabBarLabel: 'Library',
      tabBarIcon: Icon
    }
  }
);
