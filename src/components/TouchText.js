import * as React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import { gStyle } from '../constants';

const TouchText = ({ onPress, style, styleText, text }) => (
  <TouchableOpacity
    activeOpacity={gStyle.activeOpacity}
    hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
    onPress={onPress}
    style={[gStyle.flexCenter, style]}
  >
    <Text style={styleText}>{text}</Text>
  </TouchableOpacity>
);

TouchText.defaultProps = {
  style: {},
  styleText: {}
};

TouchText.propTypes = {
  // required
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,

  // optional
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.object
  ]),
  styleText: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.object
  ])
};

export default TouchText;
