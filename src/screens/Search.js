import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { gStyle } from '../api';

const Search = ({ navigation }) => (
  <View style={gStyle.container}>
    <Text>Search</Text>
  </View>
);

Search.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default Search;
