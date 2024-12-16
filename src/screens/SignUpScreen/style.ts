import { StyleSheet } from "react-native";
import { responsiveHeight,responsiveWidth } from "react-native-responsive-dimensions";

export default StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: 'black',
    },
    container: {
      paddingVertical: responsiveHeight(10),
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      // flex:1
    },
    input: {
      width: '100%',
      backgroundColor: '#333',
      color: '#fff',
      paddingVertical: 20,
      paddingHorizontal: 15,
      borderRadius: 5,
      fontSize: 16,
      marginBottom: 10,
    },
    loginButton: {
      width: '100%',
      backgroundColor: '#e50914',
      paddingVertical: 12,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 10,
    },
    loginButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    errorText: {
      color: '#FFA500',
      fontSize: 14,
      alignSelf: 'flex-start',
      marginBottom: 10,
    },
    img: {
      height: responsiveHeight(25),
      width: responsiveWidth(25),
      resizeMode: 'contain',
      marginTop: responsiveWidth(1),
    },
    arrow: {
      height: responsiveHeight(5),
      width: responsiveWidth(5),
      tintColor: 'white',
      resizeMode: 'contain',
    },
    arrView: {
      marginLeft: responsiveHeight(2),
      marginTop: responsiveWidth(1),
      height: 30,
      width: 30,
      borderRadius: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 5,
    },
    imgVw: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      
    },
    iconStyle: {
      position: 'absolute',
      bottom: responsiveHeight(4),
      right: responsiveWidth(1),
    },
  });