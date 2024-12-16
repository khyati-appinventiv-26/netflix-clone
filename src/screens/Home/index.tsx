import React, { useState, useEffect } from 'react';
import { ScrollView, Alert, View } from 'react-native';
import Home_Banner from '../../components/Home_Banner';
import MovieCards from '../../components/MovieCards';
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getPopularTVShows, getTopRatedTVShows } from '../../api/Api';
import Header from '../../components/Header';
import styles from './style';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date?: string;
  vote_average?: number;
}

interface TVShow {
  id: number;
  name: string;
  poster_path: string;
  overview: string;
  first_air_date?: string;
  vote_average?: number;
}

const Home: React.FC = ({navigation} : any) => {
  const [nowPlayingData, setNowPlayingData] = useState<Movie[]>([]);
  const [popularMoviesData, setPopularMoviesData] = useState<Movie[]>([]);
  const [topRatedData, setTopRatedData] = useState<Movie[]>([]);
  const [topRatedDataTv, setTopRatedDataTv] = useState<TVShow[]>([]);
  const [popularTV, setPopularTV] = useState<TVShow[]>([]);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const nowPlayingResponse = await getNowPlayingMovies();
        if (nowPlayingResponse.status === 200) {
          setNowPlayingData(nowPlayingResponse.data.results);
        } else {
          Alert.alert(`Now Playing Movies request failed with status: ${nowPlayingResponse.status}`);
        }

        const popularResponse = await getPopularMovies();
        if (popularResponse.status === 200) {
          setPopularMoviesData(popularResponse.data.results);
        } else {
          Alert.alert(`Popular Movies request failed with status: ${popularResponse.status}`);
        }

        const topRatedResponse = await getTopRatedMovies();
        if (topRatedResponse.status === 200) {
          setTopRatedData(topRatedResponse.data.results);
        } else {
          Alert.alert(`Top Rated Movies request failed with status: ${topRatedResponse.status}`);
        }

        const topTvResponse = await getTopRatedTVShows();
        if (topTvResponse.success) {
          setTopRatedDataTv(topTvResponse.data);
          console.log(topTvResponse.data,'hhhuiihu');
          
        } else {
          Alert.alert(`Top Rated TV request failed with status: ${topTvResponse.success}`);
        }

        const popularTVResponse = await getPopularTVShows();
        if (popularTVResponse.success) {
          setPopularTV(popularTVResponse.data);
        } else {
          Alert.alert(`Popular TV request failed with status: ${popularTVResponse.success}`);
        }
      } catch (error: any) {
        Alert.alert(`An error occurred: ${error.message}`);
      }
    };

    fetchAllData();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Home_Banner navigation={navigation}/>
        <View style={styles.subContainer}>
          <MovieCards title="Now Playing" data={nowPlayingData} />
          <MovieCards title="Popular Movies" data={popularMoviesData} />
          <MovieCards title="Top Rated Movies" data={topRatedData} />
          <MovieCards title="Top Rated TV Shows" data={topRatedDataTv} />
          <MovieCards title="Popular TV Shows" data={popularTV} />
        </View>
      </ScrollView>
      <Header navigation={navigation}/>
    </View>
  );
};

export default Home;
