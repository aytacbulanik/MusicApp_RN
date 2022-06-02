import React from 'react';
import {SafeAreaView, FlatList,Text,ScrollView} from 'react-native';
import MusicCard from './components/MusicCard';
import musicData from './music-data.json';
import SearchBar from './components/SearchBar';

const App = () => {
  
  const musicArray = musicData;
  const renderMusicItem = ({item}) => <MusicCard  music={item} />;
  
  return(
    <SafeAreaView>
     <Text style={{fontSize: 20}}> Müzik Listem</Text>
     <FlatList
     ListHeaderComponent={
       <ScrollView>
         <SearchBar> </SearchBar>
       </ScrollView>
     }
     keyExtractor={item => item.id}
     renderItem={renderMusicItem}
     data={musicArray}
     />
    </SafeAreaView>
    
  )
}

export default App;