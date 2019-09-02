import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';
import { colors } from '../constants';

const SvgLinearGradient = ({ fill, height }) => (
  <Svg height={height} width="100%">
    <Defs>
      <LinearGradient id="grad" x1="50%" y1="100%" x2="50%" y2="0%">
        <Stop offset="0%" stopColor={colors.blackBg} stopOpacity="1" />
        <Stop offset="5%" stopColor={colors.blackBg} stopOpacity="1" />
        <Stop offset="100%" stopColor={fill} stopOpacity="1" />
      </LinearGradient>
    </Defs>
    <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
  </Svg>
);

SvgLinearGradient.defaultProps = {
  fill: colors.brandPrimary,
  height: 320
};

SvgLinearGradient.propTypes = {
  // optional
  fill: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.number
};

export default SvgLinearGradient;
