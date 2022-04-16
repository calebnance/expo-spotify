import * as React from 'react';
import PropTypes from 'prop-types';
import { BottomTabBar } from 'react-navigation-tabs';

// components
import BarMusicPlayer from './BarMusicPlayer';

// context
import Context from '../context';

const CustomTabBar = (props) => {
  // get main app state
  const { currentSongData, toggleTabBar } = React.useContext(Context);

  return toggleTabBar ? null : (
    <React.Fragment>
      <BarMusicPlayer song={currentSongData} />
      <BottomTabBar {...props} />
    </React.Fragment>
  );
};

CustomTabBar.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default CustomTabBar;
