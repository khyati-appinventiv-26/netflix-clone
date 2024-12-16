import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

export default StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: 'black',
      // justifyContent:'center',
      alignItems: 'center',
    },
    title: {
      color: '#fff',
      fontSize: 24,
      marginBottom: responsiveHeight(5),
      marginTop: responsiveHeight(10)
    },
    input: {
      width: '80%',
      backgroundColor: '#333',
      color: '#fff',
      paddingVertical: 15,
      paddingHorizontal: 10,
      borderRadius: 5,
      fontSize: 16,
      marginBottom: 20,
      marginTop: responsiveHeight(5)
    },
    resetButton: {
      width: '80%',
      backgroundColor: '#e50914',
      paddingVertical: 12,
      borderRadius: 5,
      alignItems: 'center',
    },
    resetButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    imgArr: {
      height: 20,
      width: 20,
      resizeMode: 'contain',
      tintColor: 'white',
    },
  
    touch: {
      marginBottom: responsiveHeight(5),
      marginRight: responsiveWidth(10),
      marginTop: responsiveHeight(10),
      
    },
    top: {
      flexDirection: 'row',
      alignItems: 'center',
     justifyContent: 'space-between'
    },
  });