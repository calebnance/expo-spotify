import React from 'react';
import { Svg } from 'expo';
import PropTypes from 'prop-types';
import { colors } from '../api';

const LinearGradient = ({ fill, height }) => (
  <Svg height={height} width="100%">
    <Svg.Defs>
      <Svg.LinearGradient id="grad" x1="50%" y1="100%" x2="50%" y2="0%">
        <Svg.Stop offset="0%" stopColor={colors.blackBg} stopOpacity="1" />
        <Svg.Stop offset="5%" stopColor={colors.blackBg} stopOpacity="1" />
        <Svg.Stop offset="100%" stopColor={fill} stopOpacity="1" />
      </Svg.LinearGradient>
    </Svg.Defs>
    <Svg.Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
  </Svg>
);

LinearGradient.defaultProps = {
  fill: colors.brandPrimary,
  height: 320
};

LinearGradient.propTypes = {
  // optional
  fill: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.number
};

export default LinearGradient;
