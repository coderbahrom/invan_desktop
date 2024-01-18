import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Sidebar = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigateToScreen('Home')}>
        {/* <Icon name="home" size={20} color="black" /> */}
        <Text style={styles.menuText}>Sale</Text>
        <Text style={styles.number}>#000023</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigateToScreen('Profile')}>
        {/* <Icon name="person" size={20} color="black" /> */}
        <Text style={styles.client}>Client</Text>
      </TouchableOpacity>
      {/* Add more menu items as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    width:440,
    borderRadius:10,
    overflow: 'hidden', // Ensure content doesn't overflow the border radius
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,

  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent:"space-between"

  },
  menuText: {
    marginLeft: 10,
    fontSize:30,
    // fontWeight:6,
  },
  number:{
    marginLeft: 10,
    fontSize:30,
    // fontWeight:600,
    color:"#BDBDBD"
  }
});

export default Sidebar;
