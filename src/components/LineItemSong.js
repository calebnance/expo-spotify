import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { Feather, Ionicons } from '@expo/vector-icons';
import { colors, fonts, gStyle } from '../constants';

const LineItemSong = ({ active, downloaded, onPress, songData }) => (
  <View style={styles.container}>
    <TouchableOpacity
      activeOpacity={gStyle.activeOpacity}
      onPress={() => onPress(songData)}
      style={gStyle.flex5}
    >
      <Text
        style={[
          styles.title,
          { color: active ? colors.brandPrimary : colors.white }
        ]}
      >
        {songData.title}
      </Text>
      <View style={gStyle.flexRow}>
        {downloaded && (
          <View style={styles.circleDownloaded}>
            <Ionicons
              color={colors.blackBg}
              name="ios-arrow-round-down"
              size={14}
            />
          </View>
        )}
        <Text style={styles.artist}>{songData.artist}</Text>
      </View>
    </TouchableOpacity>

    <View style={styles.containerRight}>
      <Feather color={colors.greyLight} name="more-horizontal" size={20} />
    </View>
  </View>
);

LineItemSong.defaultProps = {
  active: false,
  downloaded: false
};

LineItemSong.propTypes = {
  // required
  onPress: PropTypes.func.isRequired,
  songData: PropTypes.shape({
    album: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    length: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,

  // optional
  active: PropTypes.bool,
  downloaded: PropTypes.bool
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    width: '100%'
  },
  title: {
    color: colors.white,
    fontFamily: fonts.spotifyRegular,
    fontSize: 16,
    marginBottom: 4
  },
  circleDownloaded: {
    alignItems: 'center',
    backgroundColor: colors.brandPrimary,
    borderRadius: 7,
    height: 14,
    justifyContent: 'center',
    marginRight: 8,
    width: 14
  },
  artist: {
    color: colors.greyInactive,
    fontFamily: fonts.spotifyRegular,
    fontSize: 12
  },
  containerRight: {
    alignItems: 'flex-end',
    flex: 1
  }
});

export default LineItemSong;
