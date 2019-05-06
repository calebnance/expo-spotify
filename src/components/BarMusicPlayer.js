import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { EvilIcons, FontAwesome } from '@expo/vector-icons';
import { colors, fonts, gStyle } from '../api';

const BarMusicPlayer = ({ navigation, song }) => (
  <TouchableOpacity
    activeOpacity={1}
    onPress={() => navigation.navigate('ModalMusicPlayer')}
    style={styles.container}
  >
    <TouchableOpacity
      activeOpacity={gStyle.activeOpacity}
      hitSlop={{ bottom: 10, left: 10, right: 10, top: 10 }}
      onPress={() => null}
      style={styles.containerIcon}
    >
      <FontAwesome color={colors.white} name="heart-o" size={20} />
    </TouchableOpacity>
    {song && (
      <View>
        <View style={gStyle.flexRowCenter}>
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
      onPress={() => null}
      style={styles.containerIcon}
    >
      <EvilIcons color={colors.white} name="play" size={32} />
    </TouchableOpacity>
  </TouchableOpacity>
);

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
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: '100%'
  },
  containerIcon: {
    ...gStyle.flexCenter,
    width: 50
  },
  title: {
    color: colors.white,
    fontFamily: fonts.spotifyRegular
  },
  artist: {
    color: colors.greyLight,
    fontFamily: fonts.spotifyRegular
  },
  device: {
    color: colors.brandPrimary,
    fontFamily: fonts.spotifyRegular,
    fontSize: 12,
    marginLeft: 4,
    textTransform: 'uppercase'
  }
});

export default BarMusicPlayer;
