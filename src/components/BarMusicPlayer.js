import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';
import { colors, device, fonts, gStyle } from '../constants';

class BarMusicPlayer extends React.Component {
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
    const { navigation, song } = this.props;
    const { favorited, paused } = this.state;

    const favoriteColor = favorited ? colors.brandPrimary : colors.white;
    const favoriteIcon = favorited ? 'heart' : 'heart-o';
    const iconPlay = paused ? 'play-circle' : 'pause-circle';

    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.navigate('ModalMusicPlayer')}
        style={styles.container}
      >
        <TouchableOpacity
          activeOpacity={gStyle.activeOpacity}
          hitSlop={{ bottom: 10, left: 10, right: 10, top: 10 }}
          onPress={this.toggleFavorite}
          style={styles.containerIcon}
        >
          <FontAwesome color={favoriteColor} name={favoriteIcon} size={20} />
        </TouchableOpacity>
        {song && (
          <View>
            <View style={styles.containerSong}>
              <Text style={styles.title}>{`${song.title} · `}</Text>
              <Text style={styles.artist}>{song.artist}</Text>
            </View>
            <View style={[gStyle.flexRowCenter, gStyle.mT4]}>
              <FontAwesome
                color={colors.brandPrimary}
                name="bluetooth-b"
                size={14}
              />
              <Text style={styles.device}>Caleb&apos;s Beatsx</Text>
            </View>
          </View>
        )}
        <TouchableOpacity
          activeOpacity={gStyle.activeOpacity}
          hitSlop={{ bottom: 10, left: 10, right: 10, top: 10 }}
          onPress={this.togglePlay}
          style={styles.containerIcon}
        >
          <FontAwesome color={colors.white} name={iconPlay} size={28} />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
}

BarMusicPlayer.defaultProps = {
  song: null
};

BarMusicPlayer.propTypes = {
  // required
  navigation: PropTypes.object.isRequired,

  // optional
  song: PropTypes.shape({
    artist: PropTypes.string,
    title: PropTypes.string
  })
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: colors.grey,
    borderBottomColor: colors.blackBg,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    width: '100%'
  },
  containerIcon: {
    ...gStyle.flexCenter,
    width: 50
  },
  containerSong: {
    ...gStyle.flexRowCenter,
    overflow: 'hidden',
    width: device.width - 100
  },
  title: {
    color: colors.white,
    fontFamily: fonts.spotifyRegular,
    fontSize: 12
  },
  artist: {
    color: colors.greyLight,
    fontFamily: fonts.spotifyRegular,
    fontSize: 12
  },
  device: {
    color: colors.brandPrimary,
    fontFamily: fonts.spotifyRegular,
    fontSize: 10,
    marginLeft: 4,
    textTransform: 'uppercase'
  }
});

export default BarMusicPlayer;
