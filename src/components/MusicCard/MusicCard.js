
import React from 'react';
import {View,Text, Image} from 'react-native';
import cardStyle from './MusicCard.Style';

const App = ({music}) =>  {
        return (
        <View style={cardStyle.container}>
            <Image style={cardStyle.image}
                source={{ uri: music.imageUrl }} />
            <View style={cardStyle.inner_container}>
                <Text style={cardStyle.title} > {music.title} </Text>
                    <View style={cardStyle.infoContent}>
                    <View style={cardStyle.infoContainer}>
                        <Text> {music.artist} </Text>
                        <Text style={cardStyle.artistText}> {music.year} </Text>
                    </View>
                    {music.isSoldOut && 
                    <View style={cardStyle.soldOut_container}>
                       <Text style={cardStyle.soldText}>Tükendi</Text>
                    </View>}
                    </View>
                    </View>
                </View>
    )};



export default App;