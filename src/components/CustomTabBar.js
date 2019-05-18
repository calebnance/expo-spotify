import React from 'react';
import PropTypes from 'prop-types';
import { BottomTabBar } from 'react-navigation';

// components
import BarMusicPlayer from './BarMusicPlayer';

// data
const songMockData = {
  artist: 'Mac Miller',
  title: 'So it goes'
};

const CustomTabBar = props => {
  const { navigation } = props;

  return (
    <React.Fragment>
      <BarMusicPlayer navigation={navigation} song={songMockData} />
      <BottomTabBar {...props} />
    </React.Fragment>
  );
};

CustomTabBar.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default CustomTabBar;
