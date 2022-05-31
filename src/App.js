import React from 'react';
import {SafeAreaView, FlatList,Text} from 'react-native';
import MusicCard from './components/MusicCard';
import musicData from './music-data.json';

const App = () => {
  
  const musicArray = musicData;
  const renderMusicItem = ({item}) => <MusicCard  music={item} />;
  
  return(
    <SafeAreaView>
     <Text> Müzik Listem</Text>
     <FlatList
     keyExtractor={item => item.id}
     renderItem={renderMusicItem}
     data={musicArray}
     />
    </SafeAreaView>
    
  )
}

export default App;