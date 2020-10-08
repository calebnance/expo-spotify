import * as React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { device, gStyle } from '../constants';

// components
import LineItemCategory from '../components/LineItemCategory';
import ScreenHeader from '../components/ScreenHeader';

// mock data
import yourLibrary from '../mockdata/menuYourLibrary.json';

const Library = () => (
  <View style={gStyle.container}>
    <View style={{ position: 'absolute', top: 0, width: '100%', zIndex: 10 }}>
      <ScreenHeader title="You Library" />
    </View>

    <FlatList
      contentContainerStyle={styles.containerFlatlist}
      data={yourLibrary}
      keyExtractor={({ id }) => id.toString()}
      renderItem={({ item }) => (
        <LineItemCategory
          icon={item.icon}
          onPress={() => null}
          title={item.title}
        />
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  containerFlatlist: {
    marginTop: device.iPhoneX ? 88 : 64
  }
});

export default Library;
