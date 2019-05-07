import React from 'react';
import PropTypes from 'prop-types';
import { BottomTabBar, createBottomTabNavigator } from 'react-navigation';
import { colors } from '../api';

// grabs stacks
import StackHome from './StackHome';
import StackSearch from './StackSearch';
import StackLibrary from './StackLibrary';

// components
import BarMusicPlayer from '../components/BarMusicPlayer';

// data
const songMockData = {
  artist: 'Mac Miller',
  title: 'So it goes'
};

const TabBarComponent = props => {
  const { navigation } = props;

  return (
    <React.Fragment>
      <BarMusicPlayer navigation={navigation} song={songMockData} />
      <BottomTabBar {...props} />
    </React.Fragment>
  );
};

TabBarComponent.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default createBottomTabNavigator(
  {
    StackHome,
    StackSearch,
    StackLibrary
  },
  {
    initialRouteName: 'StackHome',
    tabBarComponent: props => <TabBarComponent {...props} />,
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
