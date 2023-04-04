import * as React from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { colors, device, gStyle } from '../constants';

// components
import PlaylistItem from '../components/PlaylistItem';
import TouchIcon from '../components/TouchIcon';

// icons
import SvgSearch from '../icons/Svg.Search';

// mock data
import browseAll from '../mockdata/searchBrowseAll.json';
import topGenres from '../mockdata/searchTopGenres.json';

function Search() {
  const scrollY = React.useRef(new Animated.Value(0)).current;

  // search start (24 horizontal padding )
  const searchStart = device.width - 48;
  const searchEnd = device.width - 88;

  const opacity = scrollY.interpolate({
    inputRange: [0, 48],
    outputRange: [searchStart, searchEnd],
    extrapolate: 'clamp'
  });

  return (
    <React.Fragment>
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[1]}
        style={gStyle.container}
      >
        <View style={gStyle.spacer11} />
        <View style={styles.containerSearchBar}>
          <Animated.View style={{ width: opacity }}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => null}
              style={styles.searchPlaceholder}
            >
              <View style={gStyle.mR1}>
                <SvgSearch />
              </View>
              <Text style={styles.searchPlaceholderText}>
                Artists, songs or podcasts
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>

        <Text style={styles.sectionHeading}>Your top genres</Text>
        <View style={styles.containerRow}>
          {Object.keys(topGenres).map((index) => {
            const item = topGenres[index];

            return (
              <View key={item.id} style={styles.containerColumn}>
                <PlaylistItem
                  bgColor={item.color}
                  onPress={() => null}
                  title={item.title}
                />
              </View>
            );
          })}
        </View>

        <Text style={styles.sectionHeading}>Browse all</Text>
        <View style={styles.containerRow}>
          {Object.keys(browseAll).map((index) => {
            const item = browseAll[index];

            return (
              <View key={item.id} style={styles.containerColumn}>
                <PlaylistItem
                  bgColor={item.color}
                  onPress={() => null}
                  title={item.title}
                />
              </View>
            );
          })}
        </View>
      </Animated.ScrollView>

      <View style={styles.iconRight}>
        <TouchIcon
          icon={<FontAwesome color={colors.white} name="microphone" />}
          onPress={() => null}
        />
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  containerSearchBar: {
    ...gStyle.pH3,
    backgroundColor: colors.blackBg,
    paddingBottom: 16,
    paddingTop: device.iPhoneNotch ? 64 : 24
  },
  searchPlaceholder: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 6,
    flexDirection: 'row',
    paddingLeft: 16,
    paddingVertical: 16
  },
  searchPlaceholderText: {
    ...gStyle.textSpotify16,
    color: colors.blackBg
  },
  sectionHeading: {
    ...gStyle.textSpotifyBold18,
    color: colors.white,
    marginBottom: 24,
    marginLeft: 24,
    marginTop: 16
  },
  containerRow: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 24
  },
  containerColumn: {
    width: '50%'
  },
  iconRight: {
    alignItems: 'center',
    height: 28,
    justifyContent: 'center',
    position: 'absolute',
    right: 24,
    top: device.web ? 40 : 78,
    width: 28
  }
});

export default Search;
