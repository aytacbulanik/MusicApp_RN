
import React from 'react';
import {View,Text} from 'react-native';

const App = ({music}) => {
    return(
        <View>
        <Text> {music.title} </Text>
        </View>
    )
};

export default App;