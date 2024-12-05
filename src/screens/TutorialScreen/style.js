import { StyleSheet,Dimensions } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      
    },
    slide: {
      width: screenWidth,
      height: screenHeight,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      
    },
    image: {
      width: screenWidth * 0.7,
      height: screenWidth * 0.7,
      resizeMode: 'contain',
      marginBottom: 20,
    },
    title: {
      color: '#fff',
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
    },
    description: {
      color: '#fff',
      fontSize: 14,
      textAlign: 'center',
      marginHorizontal: 20,
    },
    pagination: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 20,
     
    },
    dot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: '#f2f4f8',
      marginHorizontal: 5,
    },
    activeDot: {
      backgroundColor: '#e50914',
    },
    getStartedButton: {
      backgroundColor: '#e50914',
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 5,
      alignSelf: 'center',
      marginBottom: 45,
      width: '90%',
      marginHorizontal: 25
    },
    getStartedText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    skipButton: {
      position: 'absolute',
      right: 20,
      bottom: 20,
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    skipText: {
      color: 'white',
      fontSize: 16,
    },
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
      justifyContent: 'center',
      alignItems: 'center',
      
    },
  });
  