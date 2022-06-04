import React, {useState} from 'react';
import {SafeAreaView, FlatList,Text,ScrollView} from 'react-native';
import MusicCard from './components/MusicCard';
import musicData from './music-data.json';
import SearchBar from './components/SearchBar';

const App = () => {
  const [list,setList] = useState(musicData);
  const musicArray = musicData;
  const renderMusicItem = ({item}) => <MusicCard  music={item} />;
  const handleSearch = text => {
    const  filtredList  = musicData.filter( song => {
      const searchText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();
      return currentTitle.indexOf(searchText) > -1 ;
    });
    setList(filtredList);
  };

  return(
    <SafeAreaView>
     <Text style={{fontSize: 20}}> Müzik Listem</Text>
     <SearchBar onSearch={handleSearch} />
     <FlatList
     keyExtractor={item => item.id}
     renderItem={renderMusicItem}
     data={list}
     />
    </SafeAreaView>
    
  )
}

export default App;