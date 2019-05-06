import React from 'react';
import { StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import { loadAssetsAsync } from './src/api/functions';

// main navigation stack
import Stack from './src/navigation/Stack';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return (
        <AppLoading
          onFinish={() => this.setState({ isLoading: false })}
          startAsync={loadAssetsAsync}
        />
      );
    }

    return (
      <React.Fragment>
        <StatusBar barStyle="light-content" />

        <Stack />
      </React.Fragment>
    );
  }
}
