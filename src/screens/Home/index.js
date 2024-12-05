import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React , { useState, useEffect } from 'react'
import Home_Banner from '../../components/Home_Banner'
import MovieCards from '../../components/MovieCards'
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies,getPopularTVShows,getTopRatedTVShows } from '../../api/Api'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '../../components/Header'
import { useRoute } from '@react-navigation/native'
import styles from './style'

const Home = () => {
    const [nowPlayingData, setnowPlayingData] = useState([]);
const [popularMoviesData, setpopularMoviesData] = useState([]);
const [top_ratedData, settop_ratedData] = useState([]);
const [top_ratedDataTv, settop_ratedDataTv] = useState([]);
const [popularTV, setPopularTV] = useState([]);


useEffect(() => {
    const fetchAllData = async () => {
      try {
        
        const nowPlayingResponse = await getNowPlayingMovies();
        if (nowPlayingResponse.status === 200) {
          setnowPlayingData(nowPlayingResponse.data.results);
        } else {
          Alert.alert(`Now Playing Movies request failed with status: ${nowPlayingResponse.status}`);
        }

        
        const popularResponse = await getPopularMovies();
        if (popularResponse.status === 200) {
          setpopularMoviesData(popularResponse.data.results);
        } else {
          Alert.alert(`Popular Movies request failed with status: ${popularResponse.status}`);
        }

        
        const topRatedResponse = await getTopRatedMovies();
        if (topRatedResponse.status === 200) {
          settop_ratedData(topRatedResponse.data.results);
        } else {
          Alert.alert(`Top Rated Movies request failed with status: ${topRatedResponse.status}`);
        }
      

      const topTvRes = await getTopRatedTVShows() ;
        
      if(topTvRes.success){
        
        settop_ratedDataTv(topTvRes.data)
        
      }else {
        Alert.alert(`Top Rated TV request failed with status: ${topTvRes.status}`);
      }
      
      const popularTVRes = await getPopularTVShows() ;
      
      if(popularTVRes.success){
        setPopularTV(popularTVRes.data)
      }else {
        Alert.alert(`Popular TV request failed with status: ${popularTVRes.status}`);
      }
    }catch (error) {
        Alert.alert(`An error occurred: ${error.message}`);
      }
      
    };

    fetchAllData();
  }, []);

 

  return (
    <View style={styles.container}>
       
        
      <ScrollView style={styles.scrollView}>
        <Home_Banner/>
        <View style={styles.subContainer}>
          <MovieCards title="Now Playing" data={nowPlayingData} />
          <MovieCards title="Popular Movies" data={popularMoviesData} />
          <MovieCards title="Top Rated Movies" data={top_ratedData} />
          <MovieCards title="Top Rated TV Shows" data={top_ratedDataTv} />
          <MovieCards title="Popular TV Shows" data={popularTV} />
        </View>
      </ScrollView>
      <Header/>
    </View>
  ) 
}

export default Home

 