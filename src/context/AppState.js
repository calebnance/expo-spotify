import React from 'react';
import PropTypes from 'prop-types';

// context
import Context from './index';

class AppState extends React.Component {
  constructor() {
    super();

    this.state = {
      currentSongData: {
        album: 'Swimming',
        artist: 'Mac Miller',
        image: 'swimming',
        length: 312,
        title: 'So It Goes'
      },
      isLoading: true,
      showMusicBar: true
    };

    this.updateState = this.updateState.bind(this);
  }

  updateState(key, value) {
    this.setState({
      [key]: value
    });
  }

  render() {
    const { children } = this.props;

    // app state
    const { currentSongData, isLoading, showMusicBar } = this.state;

    return (
      <Context.Provider
        value={{
          currentSongData,
          isLoading,
          showMusicBar,
          updateState: this.updateState
        }}
      >
        {children}
      </Context.Provider>
    );
  }
}

AppState.propTypes = {
  // required
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default AppState;
