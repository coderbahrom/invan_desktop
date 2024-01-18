import React from 'react';
import { View, StyleSheet,SafeAreaView } from 'react-native';
import SearchComponent from '../components/Search';
import Sidebar from '../components/Sidebar';
// import SafeAreaView from 'react-native-safe-area-view';

function HomePage({ navigation }) {
  return (

<SafeAreaView>
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <SearchComponent />
      </View>
      <View style={styles.rightContainer}>
        <Sidebar navigation={navigation} />
      </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    padding: 10,
  },
  leftContainer: {
    flex: 2,
  },
  rightContainer: {
    marginLeft: 10,
  },
});

export default HomePage;
