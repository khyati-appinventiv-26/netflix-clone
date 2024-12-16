import React, { useState,useEffect, useRef } from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Alert
} from 'react-native';
import { useDispatch } from 'react-redux';
import { addDownload } from '../../reduxPersist/downloadReducer';
import { Icons } from '../../assets';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';
import styles from './style';
import EpisodesList from '../../components/tvEpisodes';

type DownloadedMovie = {
  id: string; 
  title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  name : string
};

type MovieData = {
  title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  id: string; // Add 'id' to this type
  name: string
};

type RouteParams = {
  movieData: MovieData;
};

const TMDB_API_KEY = '8673aa4412078439ba76c3ffc7f7f104'; 
const BASE_URL = 'https://api.themoviedb.org/3';

interface Episode {
  id: number;
  name: string;
  still_path: string | null;
  overview: string;
}

interface Show {
  id: number;
  name: string;
}
const VideoPlayer: React.FC = ({ navigation, route }: any) => {
  const dispatch = useDispatch();

  const {
    title,
    backdrop_path,
    poster_path,
    overview,
    release_date,
    vote_average,
    vote_count,
    id, 
    name 
  } = route.params.movieData;

  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const scrollViewRef = useRef(null);

console.log(title, 'kkkkkkkkk');

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const seasonResponse = await fetch(
          `${BASE_URL}/tv/${id}/season/1?api_key=${TMDB_API_KEY}`
        );
        const seasonData = await seasonResponse.json();

        setEpisodes(seasonData.episodes || []);
      } catch (error: any) {
        Alert.alert('Error', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEpisodes();
  }, []);

  console.log(episodes);
  

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
     
      const movieData: DownloadedMovie = {
        id, 
        title,
        backdrop_path,
        poster_path,
        overview,
        release_date,
        vote_average,
        vote_count,
        name
      };

      
      

      setTimeout(() => {
        dispatch(addDownload(movieData)); 
        setIsDownloading(false);
      }, 10000);
    } catch (error) {
      console.error('Error downloading movie:', error);
      setIsDownloading(false);
    }
  };

  const handlePlayEpisodes = () => {
    setIsVideoVisible(true)
  }

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.scrollContainer}>
        {isVideoVisible ? (
          <Video
            controls
            repeat={false}
            resizeMode="cover"
            style={[styles.firstContainer, { marginTop: 50 }]}
            source={{
              uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            }}
            onFullscreenPlayerWillPresent={() => {
              Orientation.lockToLandscape();
            }}
            onFullscreenPlayerWillDismiss={() => {
              Orientation.lockToPortrait();
            }}
            
          />
        ) : (
          <Image
            style={styles.firstContainer}
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${backdrop_path}`,
            }}
          />
        )}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.touch}>
          <Image source={Icons.arrowLeft} style={styles.imgArr} />
        </TouchableOpacity>

        <View style={styles.secondContainer}>
          <View style={styles.seriesContainer}>
            <Fontisto name="netflix" size={22} color="red" />
            <Text style={styles.seriesText}>
              SERIES
            </Text>
          </View>
          <Text style={styles.titleText}>
            {name ? name : title} 
          </Text>

          <View style={styles.releaseInfoContainer}>
            <Text style={styles.releaseDateText}>
              {release_date ? release_date.split('-')[0] : 'N/A'}
            </Text>
            <View style={styles.separator} />
            <View style={styles.voteContainer}>
              <MaterialIcons name="favorite" size={20} color="red" />
              <Text
                style={styles.voteText}
              >
                {vote_count}%
              </Text>
              <MaterialIcons name="hd" size={25} color="white" />
            </View>
          </View>
        </View>

        <View style={styles.descriptionContainer}>
          <TouchableOpacity
            onPress={() => setIsVideoVisible(true)}
            activeOpacity={0.8}
            style={styles.playButton}
          >
            <Entypo name="controller-play" size={22} color="black" />
            <Text
              style={[
                styles.titles,
                
              ]}
            >
              Play
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleDownload}
            activeOpacity={0.8}
            style={[
              styles.playButton,
              { backgroundColor: '#2B292B', flexDirection: 'row' },
            ]}
          >
            {isDownloading ? (
              <ActivityIndicator color="white" size="small" />
            ) : (
              <Octicons
              style={styles.downloadIcon}
                name="download"
                size={22}
                color="white"
              />
            )}
            <Text
              style={[
                styles.downloadButtonText,
                
              ]}
            >
              {isDownloading ? 'Downloading...' : 'Download'}
            </Text>
          </TouchableOpacity>

          <Text
  style={styles.overviewText}
>
  {isExpanded ? overview : overview.substring(0, 100) + '...'}
  <Text
    onPress={() => setIsExpanded(!isExpanded)}
  >
    {isExpanded ? '   Read less' : 'Read more'}
  </Text>
</Text>

         
        </View>
        <View>
        <ScrollView ref={scrollViewRef}>
      {loading ? (
        <ActivityIndicator size="large" color="#E50914" />
      ) : (
        episodes.map((episode, index) => (
          <TouchableOpacity key={episode?.id} style={styles.episodeItem} onPress={
            handlePlayEpisodes
            
          }>
            <Image
              style={styles.episodeThumbnail}
              source={{
                uri: episode?.still_path
                  ? `https://image.tmdb.org/t/p/w500/${episode.still_path}`
                  : 'https://via.placeholder.com/500',
              }}
            />
            <View style={styles.episodeInfo} >
              <Text style={styles.episodeNumber}>Episode {index + 1}</Text>
              <Text style={styles.episodeTitle}>{episode?.name}</Text>
              <Text style={styles.episodeOverview}>
                {episode?.overview.substring(0, 50) + '...' || 'No description available.'}
              </Text>
            </View>
          </TouchableOpacity>
        ))
      )}
    </ScrollView>
        </View>
        
      </ScrollView>
    </View>
  );
};

export default VideoPlayer;
