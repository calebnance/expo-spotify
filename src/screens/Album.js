import React from 'react';
import {
  Alert,
  Animated,
  Image,
  StyleSheet,
  Switch,
  Text,
  View
} from 'react-native';
import PropTypes from 'prop-types';
import { Feather } from '@expo/vector-icons';
import { colors, device, fonts, gStyle, images } from '../constants';

// components
import LinearGradient from '../components/LinearGradient';
import LineItemSong from '../components/LineItemSong';
import TouchIcon from '../components/TouchIcon';
import TouchText from '../components/TouchText';

// mock data
import albums from '../mockdata/albums';

class Album extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      album: null,
      downloaded: false,
      scrollY: new Animated.Value(0),
      song: null,
      title: null
    };

    this.toggleDownloaded = this.toggleDownloaded.bind(this);
    this.changeSong = this.changeSong.bind(this);
  }

  componentDidMount() {
    const { navigation, screenProps } = this.props;
    const { currentSongData } = screenProps;
    // const albumTitle = navigation.getParam('title', 'ALBUM NOT FOUND?!');
    const albumTitle = navigation.getParam('title', 'Extraordinary Machine');

    // TODO :: tintColor deprecated
    console.disableYellowBox = true;

    this.setState({
      album: albums[albumTitle] || null,
      song: currentSongData.title,
      title: albumTitle
    });
  }

  toggleDownloaded(val) {
    // warn on switch off from kids settings...
    if (val === false) {
      Alert.alert(
        'Remove from Downloads?',
        "You won't be able to play this offline.",
        [
          { text: 'Cancel' },
          {
            onPress: () => {
              this.setState({
                downloaded: false
              });
            },
            text: 'Remove'
          }
        ],
        { cancelable: false }
      );
    } else {
      this.setState({
        downloaded: val
      });
    }
  }

  changeSong(songData) {
    const { screenProps } = this.props;
    const { changeSong } = screenProps;

    changeSong(songData);

    this.setState({
      song: songData.title
    });
  }

  render() {
    const { navigation } = this.props;
    const { album, downloaded, scrollY, song, title } = this.state;

    // album data not set?
    if (album === null) {
      return (
        <View style={[gStyle.container, gStyle.flexCenter]}>
          <Text style={{ color: colors.white }}>{`Album: ${title}`}</Text>
        </View>
      );
    }

    const opacityHeading = scrollY.interpolate({
      inputRange: [230, 280],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    });

    const opacityShuffle = scrollY.interpolate({
      inputRange: [40, 80],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    });

    return (
      <View style={gStyle.container}>
        <View style={styles.containerHeader}>
          <Animated.View
            style={[styles.headerLinear, { opacity: opacityHeading }]}
          >
            <LinearGradient fill={album.backgroundColor} height={89} />
          </Animated.View>
          <View style={styles.header}>
            <TouchIcon
              icon={<Feather color={colors.white} name="chevron-left" />}
              onPress={() => navigation.goBack(null)}
            />
            <Animated.View style={{ opacity: opacityShuffle }}>
              <Text style={styles.headerTitle}>{album.title}</Text>
            </Animated.View>
            <TouchIcon
              icon={<Feather color={colors.white} name="more-horizontal" />}
              onPress={() => null}
            />
          </View>
        </View>

        <View style={styles.containerFixed}>
          <View style={styles.containerLinear}>
            <LinearGradient fill={album.backgroundColor} />
          </View>
          <View style={styles.containerImage}>
            <Image source={images[album.image]} style={styles.image} />
          </View>
          <Text ellipsizeMode="tail" numberOfLines={1} style={styles.title}>
            {album.title}
          </Text>
          <Text style={styles.albumInfo}>
            {`Album by ${album.artist} · ${album.released}`}
          </Text>
        </View>

        <Animated.ScrollView
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={[0]}
          style={styles.containerScroll}
        >
          <View style={styles.containerSticky}>
            <Animated.View
              style={[
                styles.containerStickyLinear,
                { opacity: opacityShuffle }
              ]}
            >
              <LinearGradient fill={colors.black20} height={50} />
            </Animated.View>
            <View style={styles.containerShuffle}>
              <TouchText
                onPress={() => null}
                style={styles.btn}
                styleText={styles.btnText}
                text="Shuffle Play"
              />
            </View>
          </View>
          <View style={styles.containerSongs}>
            <View style={styles.row}>
              <Text style={styles.downloadText}>
                {downloaded ? 'Downloaded' : 'Download'}
              </Text>
              <Switch
                tintColor={colors.greySwitchBorder}
                onValueChange={val => this.toggleDownloaded(val)}
                value={downloaded}
              />
            </View>

            {album.tracks &&
              album.tracks.map((track, index) => (
                <LineItemSong
                  active={song === track.title}
                  downloaded={downloaded}
                  key={index.toString()}
                  onPress={this.changeSong}
                  songData={{
                    album: album.title,
                    artist: album.artist,
                    image: album.image,
                    length: track.seconds,
                    title: track.title
                  }}
                />
              ))}
          </View>
          <View style={gStyle.spacer128} />
        </Animated.ScrollView>
      </View>
    );
  }
}

Album.propTypes = {
  // required
  navigation: PropTypes.object.isRequired,
  screenProps: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  containerHeader: {
    height: 89,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 100
  },
  headerLinear: {
    height: 89,
    width: '100%'
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: device.iPhoneX ? 48 : 24,
    position: 'absolute',
    top: 0,
    width: '100%'
  },
  headerTitle: {
    color: colors.white,
    fontFamily: fonts.spotifyBold,
    fontSize: 16,
    paddingHorizontal: 8,
    marginTop: 2,
    textAlign: 'center',
    width: device.width - 100
  },
  containerFixed: {
    alignItems: 'center',
    paddingTop: device.iPhoneX ? 94 : 50,
    position: 'absolute',
    width: '100%'
  },
  containerLinear: {
    position: 'absolute',
    top: 0,
    width: '100%'
  },
  containerImage: {
    shadowColor: colors.black,
    shadowOffset: { height: 8, width: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 6
  },
  image: {
    height: 148,
    marginBottom: 16,
    width: 148
  },
  title: {
    color: colors.white,
    fontFamily: fonts.spotifyBold,
    fontSize: 20,
    paddingHorizontal: 24,
    marginBottom: 8,
    textAlign: 'center'
  },
  albumInfo: {
    color: colors.greyInactive,
    fontFamily: fonts.spotifyRegular,
    fontSize: 12,
    marginBottom: 48
  },
  containerScroll: {
    paddingTop: 89
  },
  containerSticky: {
    marginTop: device.iPhoneX ? 238 : 194
  },
  containerShuffle: {
    alignItems: 'center',
    height: 50,
    shadowColor: colors.blackBg,
    shadowOffset: { height: -10, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 20
  },
  containerStickyLinear: {
    top: 0,
    position: 'absolute',
    width: '100%'
  },
  btn: {
    backgroundColor: colors.brandPrimary,
    borderRadius: 25,
    height: 50,
    width: 220
  },
  btnText: {
    color: colors.white,
    fontFamily: fonts.spotifyBold,
    fontSize: 16,
    letterSpacing: 1,
    textTransform: 'uppercase'
  },
  containerSongs: {
    alignItems: 'center',
    backgroundColor: colors.blackBg,
    minHeight: 540
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    width: '100%'
  },
  downloadText: {
    color: colors.white,
    fontFamily: fonts.spotifyBold,
    fontSize: 18
  }
});

export default Album;
