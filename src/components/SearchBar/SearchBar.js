import React from 'react';
import {View,TextInput} from 'react-native';
import searchStyle from './SearchBar.Style';

const searchBar = (props) => {
    return(
        <View style={searchStyle.container}>
            <TextInput onChangeText={props.onSearch}
            placeholder='Şarkı İsmi Giriniz...' />
        </View>
    )};

export default searchBar;