import React from 'react';
import { StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import { func } from './src/constants';

// main navigation stack
import Stack from './src/navigation/Stack';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSongData: {
        album: 'Swimming',
        artist: 'Mac Miller',
        image: 'swimming',
        length: 312,
        title: 'So It Goes'
      },
      isLoading: true
    };

    this.changeSong = this.changeSong.bind(this);
  }

  changeSong(data) {
    this.setState({
      currentSongData: data
    });
  }

  render() {
    const { currentSongData, isLoading } = this.state;

    if (isLoading) {
      return (
        <AppLoading
          onFinish={() => this.setState({ isLoading: false })}
          startAsync={func.loadAssetsAsync}
        />
      );
    }

    return (
      <React.Fragment>
        <StatusBar barStyle="light-content" />

        <Stack
          screenProps={{
            currentSongData,
            changeSong: this.changeSong
          }}
        />
      </React.Fragment>
    );
  }
}
