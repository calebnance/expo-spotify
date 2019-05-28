import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import PropTypes from 'prop-types';
import { colors, fonts, gStyle, images } from '../constants';

const AlbumsHorizontal = ({ data, heading, navigation, tagline }) => (
  <View style={styles.container}>
    {heading && <Text style={styles.heading}>{heading}</Text>}
    {tagline && <Text style={styles.tagline}>{tagline}</Text>}

    <FlatList
      contentContainerStyle={styles.containerContent}
      data={data}
      horizontal
      keyExtractor={itemObj => itemObj.id.toString()}
      renderItem={itemObj => {
        const { item } = itemObj;

        return (
          <TouchableOpacity
            activeOpacity={gStyle.activeOpacity}
            hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
            onPress={() => navigation.navigate('Album', { title: item.title })}
            style={styles.item}
          >
            <View style={styles.image}>
              {item.image && (
                <Image source={images[item.image]} style={styles.image} />
              )}
            </View>
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        );
      }}
      showsHorizontalScrollIndicator={false}
    />
  </View>
);

AlbumsHorizontal.defaultProps = {
  heading: null,
  tagline: null
};

AlbumsHorizontal.propTypes = {
  // required
  data: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,

  // optional
  heading: PropTypes.string,
  tagline: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
    width: '100%'
  },
  containerContent: {
    paddingLeft: 16
  },
  heading: {
    color: colors.white,
    fontFamily: fonts.spotifyBold,
    fontSize: 18,
    paddingBottom: 6,
    textAlign: 'center'
  },
  tagline: {
    color: colors.greyInactive,
    fontFamily: fonts.spotifyRegular,
    fontSize: 12,
    paddingBottom: 6,
    textAlign: 'center'
  },
  item: {
    marginRight: 16,
    width: 148
  },
  image: {
    backgroundColor: colors.greyLight,
    height: 148,
    width: 148
  },
  title: {
    color: colors.white,
    fontFamily: fonts.spotifyBold,
    fontSize: 12,
    marginTop: 4,
    textAlign: 'center'
  }
});

export default AlbumsHorizontal;
