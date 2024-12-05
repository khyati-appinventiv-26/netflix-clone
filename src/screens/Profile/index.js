import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { getPopularTVShows, fetchRecommended } from '../../api/Api';
import Entypo from 'react-native-vector-icons/Entypo';
import { Icons } from '../../assets';
import { useNavigation, useRoute } from '@react-navigation/native';
import CustomModal from '../../components/CustomModal';
import { logout } from '../../reduxPersist/authSlice';
import styles from './style'

const MyNetflix = ({ route }) => {
  const myList = useSelector((state) => state.content.myList);
  const [popularApiData, setPopularApiData] = useState([]);
  const [continueWatchingData, setContinueWatchingData] = useState([]);
  const [isVisible, setIsVisible] = useState(false)
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const { select } = useSelector((state) => {
    console.log('inside selector', state.profiles)
    return state.profiles
  });



  useEffect(() => {

    const fetchPopularTVShows = async () => {
      try {
        const popularTVRes = await getPopularTVShows();

        if (popularTVRes.success) {
          setPopularApiData(popularTVRes.data)

        } else {
          Alert.alert(`Popular TV request failed with status: ${popularTVRes.status}`);
        }

        const continueWatch = await fetchRecommended(); {
          if (popularTVRes.success) {

            setContinueWatchingData(continueWatch.data.results)
          } else {
            Alert.alert(`Popular TV request failed with status: ${popularTVRes.status}`);
          }
        }
      } catch (error) {
        Alert.alert(`An error occurred: ${error.message}`);
      }

    };





    fetchPopularTVShows();
  }, []);


  const renderList = (title, data) => (
    <View>
      <Text style={styles.sectionTitle}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data?.length > 0 ? (
          data.map((item) => <Card key={item.id} item={item} />)
        ) : (
          <Text style={styles.emptyText}>No data available.</Text>
        )}
      </ScrollView>
    </View>
  );

  const navigateToSearch = () => {
    navigation.navigate('search')
  }
  const navigateToProfile = () => {
    setIsVisible(!isVisible)
  }

  const handleProfileScreen = () => {
    navigation.navigate('profile-screen', { params: 'profile-screen' })
    setIsVisible(!isVisible)
  }

  const handleSignOut = () => {
    dispatch(logout());
    navigation.replace('login');
    setIsVisible(!isVisible)

  }
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
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
      />

      {console.log('select/////////', select)}
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
      {renderList("My List", myList)}


      {renderList("TV Shows You Might Like", popularApiData)}


      {renderList("Continue Watching", continueWatchingData)}

    </ScrollView>
  );
};

export default MyNetflix;
