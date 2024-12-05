import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";
import { responsiveHeight, responsiveFontSize } from "react-native-responsive-dimensions";

export default StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#080508',
      // marginTop: StatusBar.currentHeight,
    },
    scrollContainer: {
      flex: 1,
    },
    firstContainer: {
      height: responsiveHeight(35),
      position: 'relative',
    },
    imgArr: {
      height: 20,
      width: 20,
      resizeMode: 'contain',
      tintColor: 'white',
    },
    touch: {
      position: 'absolute',
      marginLeft: 12,
      top: 50,
    },
    secondContainer: {
      padding: 10,
      gap: 10,
    },
    titles: {
      fontSize: responsiveFontSize(2.3),
      color: 'white',
      fontWeight: '500',
    },
    playButton: {
      backgroundColor: 'white',
      height: responsiveHeight(5.3),
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: '#2B292B', 
      flexDirection: 'row'
    },
  });
  