import React from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { device, gStyle } from '../constants';

// components
import LineItemCategory from '../components/LineItemCategory';
import ScreenHeader from '../components/ScreenHeader';

// mock data
import yourLibrary from '../mockdata/menuYourLibrary';

const Library = ({ navigation }) => (
  <React.Fragment>
    <View style={{ position: 'absolute', top: 0, width: '100%', zIndex: 10 }}>
      <ScreenHeader navigation={navigation} title="You Library" />
    </View>

    <ScrollView showsVerticalScrollIndicator={false} style={gStyle.container}>
      <FlatList
        contentContainerStyle={styles.containerFlatlist}
        data={yourLibrary}
        keyExtractor={itemObj => itemObj.id.toString()}
        renderItem={itemObj => {
          const { item } = itemObj;

          return (
            <LineItemCategory
              icon={item.icon}
              onPress={() => null}
              title={item.title}
            />
          );
        }}
      />
    </ScrollView>
  </React.Fragment>
);

Library.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  containerFlatlist: {
    marginTop: device.iPhoneX ? 88 : 64
  }
});

export default Library;
