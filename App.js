import * as React from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import { func } from './src/constants';

// main navigation stack
import Stack from './src/navigation/Stack';

// app context state
import AppState from './src/context/AppState';

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  // pre-loading assets/fonts?
  if (isLoading) {
    return (
      <AppLoading
        onError={() => {
          // console.warn
        }}
        onFinish={() => setIsLoading(false)}
        startAsync={func.loadAssetsAsync}
      />
    );
  }

  return (
    <AppState>
      <StatusBar barStyle="light-content" />

      <Stack />
    </AppState>
  );
};

export default App;
