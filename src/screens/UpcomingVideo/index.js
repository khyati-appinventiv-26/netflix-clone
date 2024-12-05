import { StyleSheet, Text, View ,TouchableOpacity , Image} from 'react-native'
import React from 'react'
import styles from'./style'
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import { Icons } from '../../assets';

const UpcomingVideo = () => {

    const navigation = useNavigation();
    
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.touch}>
          <Image source={Icons.arrowLeft} style={styles.imgArr}/>
        </TouchableOpacity>
       
      <Video
        source={{ uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
        controls
        resizeMode="cover"
        style={styles.firstContainer}
        onFullscreenPlayerWillPresent={() => {
          Orientation.lockToLandscape();
        }}
        onFullscreenPlayerWillDismiss={() => {
          Orientation.lockToPortrait();
        }}
        onError={(error) => console.error('Video Error:', error)}
      />

    </View>
  )
}

export default UpcomingVideo

