import React from 'react';
import {View,TextInput} from 'react-native';
import searchStyle from './SearchBar.Style';

const searchBar = () => {
    return(
        <View style={searchStyle.viewContainer}>
            <TextInput 
            placeholder='Şarkı İsmi Giriniz...'
            style={searchStyle.container}/>
        </View>
    )};

export default searchBar;