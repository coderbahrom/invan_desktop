import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchComponent = ({ onClose, onShift, onExchange }) => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
      <TextInput
        style={{ flex: 1, height: 60, borderColor: 'gray', borderWidth: 1, borderRadius: 5, paddingLeft: 10 , paddingTop: 15 , fontSize:18}}
        placeholder="Article, barcode , name"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <TouchableOpacity onPress={onClose}>
        {/* <Icon name="close" size={30} color="black" /> */}
      </TouchableOpacity>
      <TouchableOpacity onPress={onShift}>
      </TouchableOpacity>
      <TouchableOpacity onPress={onExchange}>
        {/* <Icon name="sync" size={30} color="black" /> */}
      </TouchableOpacity>
    </View>
  );
};

export default SearchComponent;
