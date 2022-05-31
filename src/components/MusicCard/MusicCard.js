
import React from 'react';
import {View,Text, Image} from 'react-native';
import cardStyle from './MusicCard.Style';

const App = ({music}) =>  (<View style={cardStyle.container}>
    <Image style={cardStyle.image}
        source={{ uri: music.imageUrl }} />
    <View style={cardStyle.textContainer}>
        <View style={cardStyle.topTextView}>
            <Text style={cardStyle.topText}> {music.title} </Text>
            <Text style={cardStyle.artistText}> {music.artist} </Text>
        </View>
        <View style={cardStyle.bottomTextView}>
            <View>
                <Text> {music.album} </Text>
                <Text style={cardStyle.artistText}> {music.year} </Text>
            </View>
            <View >
                <Text style={cardStyle.tukendi}>Tükendi</Text>
            </View>
        </View>
    </View>
</View>)


export default App;