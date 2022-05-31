
import React from 'react';
import {View,Text, Image} from 'react-native';
import cardStyle from './MusicCard.Style';

const App = ({music}) =>  {
        return (<View style={cardStyle.container}>
            <Image style={cardStyle.image}
                source={{ uri: music.imageUrl }} />
            <View style={cardStyle.textContainer}>
                <View style={cardStyle.topTextView}>
                    <Text style={cardStyle.topText}> {music.title} </Text>
                    <Text> {music.artist} </Text>
                </View>
                <View style={cardStyle.bottomTextView}>
                    <Text> {music.album} </Text>
                    <Text> {music.year} </Text>
                </View>
            </View>
        </View>)
    }


export default App;