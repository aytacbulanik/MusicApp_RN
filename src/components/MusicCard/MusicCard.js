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
                    <View style={cardStyle.infoContainer}>
                        <Text> {music.album} </Text>
                        <Text style={cardStyle.artistText}> {music.year} </Text>
                    </View>
                    <View style={cardStyle.soldOut_container}>
                        {music.isSoldOut && <Text style={cardStyle.soldText}>Tükendi</Text>}
                    </View>
                    </View>
                </View>
    )};



export default App;