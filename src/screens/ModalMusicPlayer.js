import React from 'react';
import { Image, Slider, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { colors, device, fonts, func, gStyle, images } from '../constants';

// components
import ModalHeader from '../components/ModalHeader';
import TouchIcon from '../components/TouchIcon';

class ModalMusicPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favorited: false,
      paused: true
    };

    this.toggleFavorite = this.toggleFavorite.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
  }

  toggleFavorite() {
    this.setState(prev => ({
      favorited: !prev.favorited
    }));
  }

  togglePlay() {
    this.setState(prev => ({
      paused: !prev.paused
    }));
  }

  render() {
    const { navigation, screenProps } = this.props;
    const { currentSongData } = screenProps;
    const { favorited, paused } = this.state;

    const favoriteColor = favorited ? colors.brandPrimary : colors.white;
    const favoriteIcon = favorited ? 'heart' : 'heart-o';
    const iconPlay = paused ? 'play-circle' : 'pause-circle';

    const timePast = func.formatTime(0);
    const timeLeft = func.formatTime(currentSongData.length);

    return (
      <View style={gStyle.container}>
        <ModalHeader
          left={<Feather color={colors.greyLight} name="chevron-down" />}
          leftPress={() => navigation.goBack(null)}
          right={<Feather color={colors.greyLight} name="more-horizontal" />}
          text={currentSongData.album}
        />

        <View style={gStyle.p24}>
          <Image source={images[currentSongData.image]} style={styles.image} />

          <View style={[gStyle.flexRowSpace, styles.containerDetails]}>
            <View style={styles.containerSong}>
              <Text ellipsizeMode="tail" numberOfLines={1} style={styles.song}>
                {currentSongData.title}
              </Text>
              <Text style={styles.artist}>{currentSongData.artist}</Text>
            </View>
            <View style={styles.containerFavorite}>
              <TouchIcon
                icon={<FontAwesome color={favoriteColor} name={favoriteIcon} />}
                onPress={this.toggleFavorite}
              />
            </View>
          </View>

          <View style={styles.containerVolume}>
            <Slider
              minimumValue={0}
              maximumValue={currentSongData.length}
              minimumTrackTintColor={colors.white}
              maximumTrackTintColor={colors.grey3}
            />
            <View style={styles.containerTime}>
              <Text style={styles.time}>{timePast}</Text>
              <Text style={styles.time}>{`-${timeLeft}`}</Text>
            </View>
          </View>

          <View style={styles.containerControls}>
            <TouchIcon
              icon={<Feather color={colors.greyLight} name="shuffle" />}
              onPress={() => null}
            />
            <View style={gStyle.flexRowCenterAlign}>
              <TouchIcon
                icon={<FontAwesome color={colors.white} name="step-backward" />}
                iconSize={32}
                onPress={() => null}
              />
              <View style={gStyle.pH24}>
                <TouchIcon
                  icon={<FontAwesome color={colors.white} name={iconPlay} />}
                  iconSize={64}
                  onPress={this.togglePlay}
                />
              </View>
              <TouchIcon
                icon={<FontAwesome color={colors.white} name="step-forward" />}
                iconSize={32}
                onPress={() => null}
              />
            </View>
            <TouchIcon
              icon={<Feather color={colors.greyLight} name="repeat" />}
              onPress={() => null}
            />
          </View>

          <View style={styles.containerBottom}>
            <TouchIcon
              icon={<Feather color={colors.greyLight} name="speaker" />}
              onPress={() => null}
            />
            <TouchIcon
              icon={
                <MaterialIcons color={colors.greyLight} name="playlist-play" />
              }
              onPress={() => null}
            />
          </View>
        </View>
      </View>
    );
  }
}

ModalMusicPlayer.propTypes = {
  // required
  navigation: PropTypes.object.isRequired,
  screenProps: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  image: {
    height: device.width - 48,
    marginVertical: device.iPhoneX ? 36 : 8,
    width: device.width - 48
  },
  containerDetails: {
    marginBottom: 16
  },
  containerSong: {
    flex: 6
  },
  song: {
    color: colors.white,
    fontFamily: fonts.spotifyBold,
    fontSize: 24
  },
  artist: {
    color: colors.greyInactive,
    fontFamily: fonts.spotifyRegular,
    fontSize: 18
  },
  containerFavorite: {
    alignItems: 'flex-end',
    flex: 1,
    justifyContent: 'center'
  },
  containerTime: {
    ...gStyle.flexRowSpace
  },
  time: {
    color: colors.greyInactive,
    fontFamily: fonts.spotifyRegular,
    fontSize: 10
  },
  containerControls: {
    ...gStyle.flexRowSpace,
    marginTop: device.iPhoneX ? 24 : 8
  },
  containerBottom: {
    ...gStyle.flexRowSpace,
    marginTop: device.iPhoneX ? 32 : 8
  }
});

export default ModalMusicPlayer;
