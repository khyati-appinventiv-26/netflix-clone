import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card';
import { getPopularTVShows, fetchRecommended } from '../../api/Api';
import Entypo from 'react-native-vector-icons/Entypo';
import { Icons } from '../../assets';
import CustomModal from '../../components/CustomModal';
import { logout } from '../../reduxPersist/authSlice';
import styles from './style';

// TypeScript types
interface Profile {
  name: string;
}

interface Movie {
  id: string;
  title: string;
  poster_path: string;
}

interface State {
  content: {
    myList: Movie[];
  };
  profiles: Profile[];
}

const MyNetflix: React.FC = ({ navigation }: any) => {
  const myList = useSelector((state: State) => state.content.myList);
  const [popularApiData, setPopularApiData] = useState<Movie[]>([]);
  const [continueWatchingData, setContinueWatchingData] = useState<Movie[]>([]);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  
  const dispatch = useDispatch();

  const { select } : any = useSelector((state: State) => {
    return state.profiles;
  });

  useEffect(() => {
    const fetchPopularTVShows = async () => {
      try {
        const popularTVRes = await getPopularTVShows();

        if (popularTVRes.success) {
          setPopularApiData(popularTVRes.data);
        } else {
          Alert.alert(`Popular TV request failed with status: ${popularTVRes.success}`);
        }

        const continueWatch = await fetchRecommended();
        if (continueWatch.success) {
          setContinueWatchingData(continueWatch.data.results);
        } else {
          Alert.alert(`Recommended TV request failed with status: ${continueWatch.success}`);
        }
      } catch (error:any) {
        Alert.alert(`An error occurred: ${error.message}`);
      }
    };

    fetchPopularTVShows();
  }, []);

  const renderList = (title: string, data: Movie[]) => (
    <View>
      <Text style={styles.sectionTitle}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data?.length > 0 ? (
          data.map((item) => <Card key={item.id} item={item} navigation={navigation}/>)
        ) : (
          <Text style={styles.emptyText}>No data available.</Text>
        )}
      </ScrollView>
    </View>
  );

  const navigateToSearch = () => {
    navigation.navigate('search');
  };

  const navigateToProfile = () => {
    setIsVisible(!isVisible);
  };

  const handleProfileScreen = () => {
    navigation.navigate('profile-screen', { params: 'profile-screen' });
    setIsVisible(!isVisible);
  };

  const handleSignOut = () => {
    dispatch(logout());
    navigation.replace('login');
    setIsVisible(!isVisible);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Netflix</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={navigateToSearch}><Image source={Icons.search} style={styles.search} /></TouchableOpacity>
          <TouchableOpacity onPress={navigateToProfile}><Entypo name="menu" size={25} color="white" style={styles.icon} /></TouchableOpacity>
        </View>
      </View>

      <CustomModal
        isVisible={isVisible}
        onBackdropPress={() => setIsVisible(!isVisible)}
        img1={Icons.pencil}
        img3={Icons.power}
        img2={Icons.user}
        func1={handleProfileScreen}
        func3={handleSignOut}
        func2={() => { }}
        animationType= "slideInUp"
      />

      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' }} // Replace with actual image
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>{select?.[select?.length - 1]?.name}</Text>
      </View>

      <TouchableOpacity style={styles.nextSec} onPress={() => navigation.navigate('down')}>
        <View style={styles.downView}>
          <Image source={{ uri: 'https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/512/Downloads-icon.png' }} style={styles.downImg} />
          <Text style={styles.downTxt}>Downloads</Text>
        </View>
        <Image source={Icons.next} />
      </TouchableOpacity>

      {renderList('My List', myList)}
      {renderList('TV Shows You Might Like', popularApiData)}
      {renderList('Continue Watching', continueWatchingData)}
    </ScrollView>
  );
};

export default MyNetflix;
