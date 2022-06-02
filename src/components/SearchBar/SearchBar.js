import react from 'react';
import {View,TextInput} from 'react-native';
import styles from './SearchBar.Style';

const searchBar = () => {
    return(
        <View>
            <TextInput style={searchStyle.container}/>
        </View>
    )
};

export default searchBar;