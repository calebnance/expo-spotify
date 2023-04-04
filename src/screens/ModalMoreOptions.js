import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image
} from 'react-native';
import { device, gStyle, images, colors, fonts } from '../constants';

// components
import LineItemCategory from '../components/LineItemCategory';

// mock data
import moreOptions from '../mockdata/menuMoreOptions.json';

// context
import Context from '../context';

function ModalMoreOptions({ navigation, route }) {
  const { album } = route.params;

  // get main app state
  const { showMusicBar, updateState } = React.useContext(Context);

  return (
    <React.Fragment>
      <SafeAreaView style={styles.containerSafeArea}>
        <TouchableWithoutFeedback
          onPress={() => {
            // update main state
            updateState('showMusicBar', !showMusicBar);

            navigation.goBack();
          }}
        >
          <View style={styles.containerButton}>
            <Text style={styles.buttonText}>Cancel</Text>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>

      <ScrollView
        contentContainerStyle={[gStyle.flex1, gStyle.pB80]}
        showsVerticalScrollIndicator={false}
        style={[gStyle.container, styles.transparent]}
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

        {Object.keys(moreOptions).map((index) => {
          const item = moreOptions[index];

          return (
            <LineItemCategory
              key={item.id}
              disableRightSide
              icon={item.icon}
              iconLibrary={item.lib}
              onPress={() => null}
              title={item.title}
            />
          );
        })}
      </ScrollView>
    </React.Fragment>
  );
}

ModalMoreOptions.propTypes = {
  // required
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  containerSafeArea: {
    ...gStyle.containerAbsolute,
    backgroundColor: colors.blackBlur
  },
  containerButton: {
    ...gStyle.flexCenter,
    ...gStyle.spacer6
  },
  buttonText: {
    color: colors.white,
    fontSize: 18
  },
  transparent: {
    backgroundColor: 'transparent'
  },
  container: {
    alignItems: 'center',
    paddingTop: device.iPhoneNotch ? 94 : 50
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
    marginBottom: 8,
    paddingHorizontal: 24,
    textAlign: 'center'
  },
  albumInfo: {
    color: colors.greyInactive,
    fontFamily: fonts.spotifyRegular,
    fontSize: 12,
    marginBottom: 48
  }
});

export default ModalMoreOptions;
