import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BlurView } from 'expo-blur';
import PropTypes from 'prop-types';
import { Feather } from '@expo/vector-icons';
import { colors, device, fonts, gStyle } from '../constants';

// components
import TouchIcon from './TouchIcon';

const ScreenHeader = ({ navigation, showBack, title }) => (
  <BlurView tint="dark" intensity={96} style={styles.container}>
    {showBack && (
      <View style={styles.left}>
        <TouchIcon
          icon={<Feather color={colors.white} name="chevron-left" />}
          onPress={() => navigation.goBack(null)}
        />
      </View>
    )}

    <View style={styles.containerText}>
      <Text style={styles.text}>{title}</Text>
    </View>

    {showBack && <View style={gStyle.flex1} />}
  </BlurView>
);

ScreenHeader.defaultProps = {
  showBack: false
};

ScreenHeader.propTypes = {
  // required
  navigation: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,

  // optional
  showBack: PropTypes.bool
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
    paddingHorizontal: 24,
    paddingTop: device.iPhoneX ? 48 : 24
  },
  containerText: {
    ...gStyle.flex5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: colors.white,
    fontFamily: fonts.spotifyBold,
    fontSize: 16,
    textAlign: 'center'
  },
  left: {
    ...gStyle.flex1,
    alignItems: 'flex-start'
  }
});

export default ScreenHeader;
