import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { gStyle } from '../api';

const Library = ({ navigation }) => (
  <View style={gStyle.container}>
    <Text>Library</Text>
  </View>
);

Library.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default Library;
