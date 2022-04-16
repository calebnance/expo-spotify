import * as React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, device, gStyle } from '../constants';

// components
import BarMusicPlayer from './BarMusicPlayer';

// context
import Context from '../context';

// https://reactnavigation.org/docs/5.x/bottom-tab-navigator/#tabbar
const CustomTabBar = ({ descriptors, navigation, state }) => {
  // get main app state
  const { currentSongData } = React.useContext(Context);

  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <React.Fragment>
      <BarMusicPlayer song={currentSongData} />
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const Icon = options.tabBarIcon;
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;
          const color = isFocused ? colors.white : colors.greyInactive;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key
            });
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.containerTab}
            >
              <Icon active={isFocused} />
              <Text style={[styles.label, { color }]}>{label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </React.Fragment>
  );
};

CustomTabBar.propTypes = {
  // required
  descriptors: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  container: {
    ...gStyle.flexRowCenterAlign,
    backgroundColor: colors.grey,
    paddingBottom: device.iPhoneNotch ? 24 : 16,
    paddingTop: 12
  },
  containerTab: {
    ...gStyle.flex1,
    ...gStyle.flexCenter
  },
  label: {
    color: 'red',
    paddingTop: 4
  }
});

export default CustomTabBar;
