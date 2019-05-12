import React from 'react';
import { Animated, StyleSheet, Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import { colors, device, gStyle } from '../api';

class Search extends React.Component {
  constructor(props) {
    super(props);

    // search start (24 horizontal padding )
    const searchStart = device.width - 48;

    this.state = {
      scrollY: new Animated.Value(0),
      searchStart,
      searchEnd: searchStart - 40
    };
  }

  render() {
    const { scrollY, searchStart, searchEnd } = this.state;

    const opacity = scrollY.interpolate({
      inputRange: [0, 60],
      outputRange: [searchStart, searchEnd],
      extrapolate: 'clamp'
    });

    return (
      <React.Fragment>
        <Animated.ScrollView
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: scrollY } } }
          ])}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={[1]}
          style={[gStyle.container, gStyle.pH24]}
        >
          <View style={gStyle.spacer64} />
          <View style={styles.containerSearchBar}>
            <Animated.View style={{ width: opacity }}>
              <TextInput keyboardAppearance="dark" style={styles.input} />
            </Animated.View>
          </View>
          <View
            style={{ backgroundColor: 'grey', height: 1000, width: '100%' }}
          />
        </Animated.ScrollView>
        <View
          style={{
            backgroundColor: 'blue',
            height: 28,
            position: 'absolute',
            right: 24,
            top: 74,
            width: 28
          }}
        />
      </React.Fragment>
    );
  }
}

Search.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  containerSearchBar: {
    paddingTop: device.iPhoneX ? 64 : 20
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 16
  },
  customBar: {
    backgroundColor: 'grey'
  }
});

export default Search;
