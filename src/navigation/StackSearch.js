import * as React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation-stack';

// screens
import SearchScreen from '../screens/Search';

// icons
import SvgTabSearch from '../components/icons/Svg.TabSearch';

const Icon = ({ focused }) => <SvgTabSearch active={focused} />;

Icon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

export default createStackNavigator(
  {
    SearchMain: {
      screen: SearchScreen
    }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: Icon
    }
  }
);
