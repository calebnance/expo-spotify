import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { colors, fonts } from '../api';

const albumsArray = [
  { id: 1, title: 'Ex:Re' },
  { id: 2, title: 'Swimming' },
  { id: 3, title: 'Lux Prima' },
  { id: 4, title: 'Man On The Moon II: The Legend of Mr. Rager' },
  { id: 5, title: 'Sea Of Cowards' },
  { id: 6, title: 'Wish You Were Here' },
  { id: 7, title: 'Extraordinary Machine' },
  { id: 8, title: 'The Creek Drank The Cradle' }
];

const AlbumsHorizontal = ({ heading }) => {
  return (
    <View style={styles.container}>
      {heading && <Text style={styles.heading}>{heading}</Text>}

      <FlatList
        contentContainerStyle={styles.containerContent}
        data={albumsArray}
        horizontal
        keyExtractor={itemObj => itemObj.id.toString()}
        renderItem={itemObj => {
          const { item } = itemObj;

          return (
            <View style={styles.item}>
              <View style={styles.image} />
              <Text style={styles.title}>{item.title}</Text>
            </View>
          );
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

AlbumsHorizontal.defaultProps = {
  heading: null
};

AlbumsHorizontal.propTypes = {
  // optional
  heading: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    marginBottom: 16,
    width: '100%'
  },
  containerContent: {
    paddingLeft: 24,
    paddingRight: 8
  },
  heading: {
    color: colors.white,
    fontFamily: fonts.spotifyBold,
    fontSize: 18,
    paddingBottom: 8,
    textAlign: 'center'
  },
  item: {
    marginRight: 16,
    width: 180
  },
  image: {
    backgroundColor: colors.white,
    height: 180,
    width: 180
  },
  title: {
    color: colors.white,
    fontFamily: fonts.spotifyBold,
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center'
  }
});

export default AlbumsHorizontal;
