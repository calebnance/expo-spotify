import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { colors, gStyle } from '../api';

const Album = ({ navigation }) => {
  const albumTitle = navigation.getParam('title', 'ALBUM NOT FOUND?!');

  return (
    <View style={[gStyle.container, gStyle.flexCenter]}>
      <Text style={{ color: colors.white }}>{`Album: ${albumTitle}`}</Text>
    </View>
  );
};

Album.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default Album;
