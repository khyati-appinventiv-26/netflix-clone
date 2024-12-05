import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';
import { useDispatch } from 'react-redux';
import { addDownload } from '../../reduxPersist/downloadReducer';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Icons } from '../../assets';
import styles from './style'

const VideoPlayer = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {
    title,
    backdrop_path,
    poster_path,
    overview,
    release_date,
    vote_average,
    vote_count,
  } = route.params.movieData;

  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      
      const movieData = {
        title,
        backdrop_path,
        poster_path,
        overview,
        release_date,
        vote_average,
        vote_count,
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

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.scrollContainer}>
        {isVideoVisible ? (
          <Video
            setControls
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
            fullscreen={true}
          />
        ) : (
          <Image
            style={styles.firstContainer}
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${backdrop_path}`,
            }}
          />
        )}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.touch}>
          <Image source={Icons.arrowLeft} style={styles.imgArr} />
        </TouchableOpacity>

        <View style={styles.secondContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <Fontisto name="netflix" size={22} color="red" />
            <Text style={{ fontSize: 15, color: 'white', letterSpacing: 5 }}>
              SERIES
            </Text>
          </View>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
            {title}
          </Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <Text style={{ fontSize: 16, color: 'white' }}>
            {release_date ? release_date.split('-')[0] : 'N/A'}
            </Text>
            <View
              style={{ width: 2.5, height: 20, backgroundColor: 'white' }}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
              <MaterialIcons name="favorite" size={20} color="red" />
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontWeight: '700',
                  lineHeight: 15,
                }}>
                {vote_count}%
              </Text>
              <MaterialIcons name="hd" size={25} color="white" />
            </View>
          </View>
        </View>

        <View style={{ padding: 10, gap: 10, marginTop: 5 }}>
          <TouchableOpacity
            onPress={() => setIsVideoVisible(true)}
            activeOpacity={0.8}
            style={styles.playButton}>
            <Entypo name="controller-play" size={22} color="black" />
            <Text
              style={[
                styles.titles,
                {
                  fontSize: responsiveFontSize(2),
                  color: 'black',
                  fontWeight: '700',
                },
              ]}>
              Play
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleDownload}
            activeOpacity={0.8}
            style={[
              styles.playButton,
              { backgroundColor: '#2B292B', flexDirection: 'row' },
            ]}>
            {isDownloading ? (
              <ActivityIndicator color="white" size="small" />
            ) : (
              <Octicons
                style={{ marginRight: 5 }}
                name="download"
                size={22}
                color="white"
              />
            )}
            <Text
              style={[
                styles.titles,
                {
                  fontSize: responsiveFontSize(2),
                  color: 'white',
                  fontWeight: '700',
                },
              ]}>
              {isDownloading ? 'Downloading...' : 'Download'}
            </Text>
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 16,
              color: 'white',
              marginVertical: 10,
              lineHeight: 25,
              textAlign: 'justify',
            }}>
            {overview}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default VideoPlayer;

