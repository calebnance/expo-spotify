import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors, gStyle } from '../constants';

const LineItemCategory = ({ icon, onPress, title }) => (
  <TouchableOpacity
    activeOpacity={gStyle.activeOpacity}
    onPress={onPress}
    style={styles.container}
  >
    <View style={gStyle.flexRowCenterAlign}>
      <Feather color={colors.greyInactive} name={icon} size={24} />
      <Text style={styles.title}>{title}</Text>
    </View>
    <View style={styles.containerRight}>
      <Feather color={colors.greyInactive} name="chevron-right" size={20} />
    </View>
  </TouchableOpacity>
);

LineItemCategory.propTypes = {
  // required
  icon: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 10,
    width: '100%'
  },
  title: {
    ...gStyle.textSpotify14,
    color: colors.white,
    marginLeft: 16
  },
  containerRight: {
    alignItems: 'flex-end',
    flex: 1
  }
});

export default LineItemCategory;
