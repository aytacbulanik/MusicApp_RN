
import React from 'react';
import {View,Text, Image} from 'react-native';
import cardStyle from './MusicCard.Style';

const App = ({music}) => {
    return(
        <View style={cardStyle.container}>
            <Image style={cardStyle.image}
            source={{uri: music.imageUrl}}
            />
        <Text> {music.title} </Text>
        </View>
    )
};

export default App;