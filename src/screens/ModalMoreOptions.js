import React from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  SafeAreaView,
  FlatList,
  ScrollView,
  StyleSheet,
  Image
} from 'react-native';

import PropTypes from 'prop-types';
import { device, gStyle, images, colors, fonts } from '../constants';
import moreOptions from '../mockdata/menuMoreOptions';
import LineItemCategory from '../components/LineItemCategory';

export default function ModalMoreOptions({
  navigation,
  screenProps: { setToggleTabBar }
}) {
  const album = navigation.getParam('album');

  return (
    <React.Fragment>
      <SafeAreaView
        style={{
          ...gStyle.containerAbsolute,
          backgroundColor: colors.blackBlur
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.goBack();
            setToggleTabBar();
          }}
        >
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Cancel</Text>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[gStyle.container, { backgroundColor: 'transparent' }]}
        contentContainerStyle={[gStyle.flex1, gStyle.pB80]}
      >
        <View style={styles.container}>
          <View style={styles.containerImage}>
            <Image source={images[album.image]} style={styles.image} />
          </View>
          <Text ellipsizeMode="tail" numberOfLines={1} style={styles.title}>
            {album.title}
          </Text>
          <Text style={styles.albumInfo}>
            {`Album by ${album.artist} · ${album.released}`}
          </Text>
        </View>

        <FlatList
          data={moreOptions}
          keyExtractor={itemObj => itemObj.id.toString()}
          renderItem={itemObj => {
            const { item } = itemObj;

            return (
              <View style={gStyle.mB22}>
                <LineItemCategory
                  icon={item.icon}
                  onPress={() => null}
                  title={item.title}
                  disableRightSide
                  iconLibrary={item.lib}
                />
              </View>
            );
          }}
        />
      </ScrollView>
    </React.Fragment>
  );
}

ModalMoreOptions.propTypes = {
  // required
  navigation: PropTypes.object.isRequired,
  screenProps: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  buttonContainer: {
    ...gStyle.flexCenter,
    ...gStyle.spacer48
  },
  buttonText: {
    color: colors.white,
    fontSize: 18
  },
  container: {
    paddingTop: device.iPhoneX ? 94 : 50,
    alignItems: 'center'
  },
  containerImage: {
    shadowColor: colors.black,
    shadowOffset: { height: 8, width: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 6
  },
  image: {
    height: 148,
    marginBottom: 16,
    width: 148
  },
  title: {
    color: colors.white,
    fontFamily: fonts.spotifyBold,
    fontSize: 20,
    paddingHorizontal: 24,
    marginBottom: 8,
    textAlign: 'center'
  },
  albumInfo: {
    color: colors.greyInactive,
    fontFamily: fonts.spotifyRegular,
    fontSize: 12,
    marginBottom: 48
  }
});
