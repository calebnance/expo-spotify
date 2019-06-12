import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { colors } from '../../constants';

const SvgTabLibrary = ({ active, size }) => {
  const fill = active ? colors.white : colors.greyInactive;
  const dPath = active
    ? 'M311.873 77.46l166.349 373.587-39.111 17.27L272.762 94.73zM64 463.746v-384h42.666v384H64zm106.667 0v-384h42.667v384h-42.666z'
    : 'M291.301 81.778L457.65 455.365 438.349 464 272 90.413zM64 463.746v-384h21.334v384H64zm128 0v-384h21.334v384H192z';

  return (
    <Svg height={size} width={size} viewBox="0 0 512 512">
      <Path d={dPath} fill={fill} />
    </Svg>
  );
};

SvgTabLibrary.defaultProps = {
  active: false,
  size: 24
};

SvgTabLibrary.propTypes = {
  // optional
  active: PropTypes.bool,
  size: PropTypes.number
};

export default SvgTabLibrary;
