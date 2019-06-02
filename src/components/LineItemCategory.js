import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import {
  Feather,
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome
} from '@expo/vector-icons';
import { colors, fonts, gStyle } from '../constants';

const LineItemCategory = ({
  icon,
  onPress,
  title,
  disableRightSide,
  iconLibrary
}) => {
  // TODO: spread props
  const Icon = {
    Feather: <Feather color={colors.greyInactive} name={icon} size={24} />,
    Entypo: <Entypo color={colors.greyInactive} name={icon} size={24} />,
    MaterialCommunityIcons: (
      <MaterialCommunityIcons
        color={colors.greyInactive}
        name={icon}
        size={24}
      />
    ),
    MaterialIcons: (
      <MaterialIcons color={colors.greyInactive} name={icon} size={24} />
    ),
    FontAwesome: (
      <FontAwesome color={colors.greyInactive} name={icon} size={24} />
    )
  };

  return (
    <TouchableOpacity
      activeOpacity={gStyle.activeOpacity}
      onPress={onPress}
      style={styles.container}
    >
      <View style={gStyle.flexRowCenterAlign}>
        {iconLibrary ? (
          Icon[iconLibrary]
        ) : (
          <Feather color={colors.greyInactive} name={icon} size={24} />
        )}
        <Text style={styles.title}>{title}</Text>
      </View>

      {disableRightSide ? null : (
        <View style={styles.containerRight}>
          <Feather color={colors.greyInactive} name="chevron-right" size={20} />
        </View>
      )}
    </TouchableOpacity>
  );
};

LineItemCategory.defaultProps = {
  disableRightSide: false,
  iconLibrary: false
};

LineItemCategory.propTypes = {
  // required
  icon: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,

  // optional
  disableRightSide: PropTypes.string,
  iconLibrary: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
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
    color: colors.white,
    fontFamily: fonts.spotifyRegular,
    fontSize: 14,
    marginLeft: 16
  },
  containerRight: {
    alignItems: 'flex-end',
    flex: 1
  }
});

export default LineItemCategory;
