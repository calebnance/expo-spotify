import * as React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { colors, device, gStyle } from '../constants';

// components
import AlbumsHorizontal from '../components/AlbumsHorizontal';

// mock data
import heavyRotation from '../mockdata/heavyRotation.json';
import jumpBackIn from '../mockdata/jumpBackIn.json';
import recentlyPlayed from '../mockdata/recentlyPlayed.json';

function Home() {
  const scrollY = React.useRef(new Animated.Value(0)).current;

  const opacityIn = scrollY.interpolate({
    inputRange: [0, 128],
    outputRange: [0, 1],
    extrapolate: 'clamp'
  });

  const opacityOut = scrollY.interpolate({
    inputRange: [0, 88],
    outputRange: [1, 0],
    extrapolate: 'clamp'
  });

  return (
    <React.Fragment>
      {device.iPhoneNotch && (
        <Animated.View style={[styles.iPhoneNotch, { opacity: opacityIn }]} />
      )}

      <Animated.View style={[styles.containerHeader, { opacity: opacityOut }]}>
        <FontAwesome color={colors.white} name="cog" size={28} />
      </Animated.View>

      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        style={gStyle.container}
      >
        <View style={gStyle.spacer16} />

        <AlbumsHorizontal data={recentlyPlayed} heading="Recently played" />

        <AlbumsHorizontal
          data={heavyRotation}
          heading="Your heavy rotation"
          tagline="The music you've had on repeat this month."
        />

        <AlbumsHorizontal
          data={jumpBackIn}
          heading="Jump back in"
          tagline="Your top listens from the past few months."
        />
      </Animated.ScrollView>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  iPhoneNotch: {
    backgroundColor: colors.black70,
    height: 44,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 20
  },
  containerHeader: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingTop: device.iPhoneNotch ? 60 : 36,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 10
  }
});

export default Home;
