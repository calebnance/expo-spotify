import React from 'react';
import {
  Animated,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';
import { colors, device, fonts, gStyle } from '../constants';

// components
import PlaylistItem from '../components/PlaylistItem';
import TouchIcon from '../components/TouchIcon';

// icons
import SvgSearch from '../components/icons/Svg.Search';

// mock data
import browseAll from '../mockdata/searchBrowseAll';
import topGenres from '../mockdata/searchTopGenres';

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
      inputRange: [0, 48],
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
          style={gStyle.container}
        >
          <View style={gStyle.spacer88} />
          <View style={styles.containerSearchBar}>
            <Animated.View style={{ width: opacity }}>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => null}
                style={styles.searchPlaceholder}
              >
                <View style={gStyle.mR8}>
                  <SvgSearch />
                </View>
                <Text style={styles.searchPlaceholderText}>
                  Artists, songs or podcasts
                </Text>
              </TouchableOpacity>
            </Animated.View>
          </View>

          <Text style={styles.sectionHeading}>Your top genres</Text>
          <FlatList
            contentContainerStyle={styles.containerFlatlist}
            data={topGenres}
            keyExtractor={itemObj => itemObj.id.toString()}
            numColumns={2}
            renderItem={itemObj => {
              const { item } = itemObj;

              return (
                <PlaylistItem
                  bgColor={item.color}
                  onPress={() => null}
                  title={item.title}
                />
              );
            }}
          />

          <Text style={styles.sectionHeading}>Browse all</Text>
          <FlatList
            contentContainerStyle={styles.containerFlatlist}
            data={browseAll}
            keyExtractor={itemObj => itemObj.id.toString()}
            numColumns={2}
            renderItem={itemObj => {
              const { item } = itemObj;

              return (
                <PlaylistItem
                  bgColor={item.color}
                  onPress={() => null}
                  title={item.title}
                />
              );
            }}
          />
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
}

Search.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  containerSearchBar: {
    ...gStyle.pH24,
    backgroundColor: colors.blackBg,
    paddingBottom: 16,
    paddingTop: device.iPhoneX ? 64 : 24
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
    color: colors.blackBg,
    fontFamily: fonts.spotifyRegular,
    fontSize: 16
  },
  sectionHeading: {
    color: colors.white,
    fontFamily: fonts.spotifyBold,
    fontSize: 18,
    marginBottom: 24,
    marginLeft: 24,
    marginTop: 16
  },
  containerFlatlist: {
    marginLeft: 24
  },
  iconRight: {
    alignItems: 'center',
    height: 28,
    justifyContent: 'center',
    position: 'absolute',
    right: 24,
    top: 78,
    width: 28
  }
});

export default Search;
