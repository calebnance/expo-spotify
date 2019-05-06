import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { gStyle } from '../api';

const Home = ({ navigation }) => (
  <View style={gStyle.container}>
    <Text>Home</Text>
  </View>
);

Home.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default Home;
