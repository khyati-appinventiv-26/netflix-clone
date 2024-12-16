import React, { useEffect, useState, useRef } from 'react';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { getUpcomingMovies } from '../../api/Api';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import Modal from 'react-native-modal';
import { useDispatch, useSelector } from 'react-redux';
import { addToMyList, removeFromMyList } from '../../reduxPersist/contentSlice';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  UpVdo: undefined;
  
};

type HeaderProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

interface Movie {
  id: string;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
}

const Home_Banner: React.FC <HeaderProps>= ({navigation}) => {
  const [upcomingApiData, setUpcomingApiData] = useState<Movie[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);
  const flatListRef = useRef<FlatList<Movie>>(null);

  const dispatch = useDispatch();
  const myList = useSelector((state: any) => state.content.myList);

  useEffect(() => {
    let timer: NodeJS.Timeout; 
    const fetchDataAndStartTimer = async () => {
      const { data, status } = await getUpcomingMovies();
      if (status === 200 && data.results.length > 0) {
        setUpcomingApiData(data.results);
        timer = setInterval(() => {
          setCurrentIndex((prevIndex) =>
            prevIndex < data.results.length - 1 ? prevIndex + 1 : 0
          );
        }, 3000);
      } else {
        console.log('No movies found');
      }
    };
  
    fetchDataAndStartTimer();
  
    return () => {
      clearInterval(timer); 
    };
  }, []);
  

  useEffect(() => {
    if (flatListRef.current && upcomingApiData.length > 0) {
      flatListRef.current.scrollToIndex({
        index: currentIndex,
        animated: true,
      });
    }
  }, [currentIndex, upcomingApiData]);

  const renderMovieBanner = ({ item }: { item: Movie }) => (
    <ImageBackground
      source={{
        uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
      }}
      style={[styles.movieBanner]}
      resizeMode="stretch"
    />
  );

  const handlePlay = () => {
    navigation.navigate('UpVdo',);
  };

  const handleInfo = () => {
    const movie = upcomingApiData[currentIndex];
    setCurrentMovie(movie);
    setModalVisible(true);
  };

  const handleAddToList = () => {
    const movie = upcomingApiData[currentIndex];

    if (movie && movie.id) {
      if (myList.some((item: Movie) => item?.id === movie?.id)) {
        dispatch(removeFromMyList(movie?.id));
      } else {
        dispatch(addToMyList(movie));
      }
    } else {
      console.log('Movie is null or undefined');
    }
  };

  const isInMyList = myList.some((item: Movie) => item?.id === upcomingApiData[currentIndex]?.id);

  return (
    <>
      <View style={styles.container}>
        <FlatList
          ref={flatListRef}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          horizontal
          data={upcomingApiData}
          renderItem={renderMovieBanner}
          keyExtractor={(item) => item.id.toString()}
        />

        <LinearGradient
          colors={['rgba(0,0,0,0.05)', 'rgba(0,0,0,0.7)']}
          style={styles.linearContainer}
        >
          <TouchableOpacity onPress={handleAddToList} style={{ alignItems: 'center' }}>
            {isInMyList ? <Text style={styles.titles}>Remove List</Text> : <Text style={styles.titles}>Add List</Text>}
          </TouchableOpacity>

          <TouchableOpacity onPress={handlePlay} activeOpacity={0.8} style={styles.playButton}>
            <Entypo name="controller-play" size={35} color="black" />
            <Text
              style={[
                styles.titles,
                {
                  fontSize: responsiveFontSize(2.2),
                  color: 'black',
                  fontWeight: '700',
                },
              ]}
            >
              Play
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleInfo} style={{ alignItems: 'center' }}>
            <Text style={styles.titles}>Info</Text>
          </TouchableOpacity>
        </LinearGradient>

        {currentMovie && (
          <Modal
            isVisible={isModalVisible}
            animationIn="slideInUp"
            onBackdropPress={() => setModalVisible(false)}
            style={styles.modalStyle}
          >
            <View style={styles.modalContainer}>
              <ScrollView contentContainerStyle={styles.modalContent}>
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500/${currentMovie.poster_path}`,
                  }}
                  style={styles.modalPoster}
                />
                <Text style={styles.modalTitle}>{currentMovie.title}</Text>
                <Text style={styles.modalReleaseDate}>
                  Release Date: {currentMovie.release_date}
                </Text>
                <Text style={styles.modalDescription}>{currentMovie.overview}</Text>
                <Text style={styles.modalCastTitle}>Cast:</Text>
                <Text style={styles.modalCast}>
                  
                  Cast 1, Example Cast 2, Example Cast 3
                </Text>
              </ScrollView>
            </View>
          </Modal>
        )}
      </View>
    </>
  );
};

export default Home_Banner;

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(80),
    width: '100%',
  },
  movieBanner: {
    width: responsiveWidth(100),
    height: '100%',
    justifyContent: 'flex-end',
    opacity: 0.9,
    position: 'relative',
  },
  linearContainer: {
    flex: 0.2,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
  },
  titles: {
    fontSize: responsiveFontSize(2.3),
    color: 'white',
    fontWeight: '500',
    marginBottom: 5,
  },
  playButton: {
    backgroundColor: 'white',
    width: responsiveWidth(28),
    height: responsiveHeight(5.5),
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  modalContainer: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '70%',
    width: '100%',
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
  },
  modalContent: {
    justifyContent: 'flex-end',
    width: '100%',
    alignItems: 'center',
    padding: 20,
  },
  modalPoster: {
    width: responsiveHeight(20),
    height: responsiveHeight(20),
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  modalTitle: {
    fontSize: responsiveFontSize(2.5),
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalReleaseDate: {
    fontSize: responsiveFontSize(2),
    color: 'gray',
    marginTop: 10,
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: responsiveFontSize(1.8),
    color: 'white',
    textAlign: 'justify',
    marginBottom: 20,
  },
  modalCastTitle: {
    fontSize: responsiveFontSize(2),
    color: 'white',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  modalCast: {
    fontSize: responsiveFontSize(1.8),
    color: 'white',
    textAlign: 'center',
  },
  searchView: {
    position: 'absolute',
    top: 40,
    right: 25,
  },
  search: {
    height: 30,
    width: 30,
    tintColor: 'white',
  },
  modalStyle: {
    margin: 0,
    flex: 1,
    justifyContent: 'flex-end',
  },
});
