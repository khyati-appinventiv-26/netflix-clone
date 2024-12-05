import { StyleSheet , Dimensions } from "react-native";

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      paddingTop: 50,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
      backgroundColor: '#333',
      width: '100%'
    },
    input: {
      flex: 1,
      height: 40,
  
      color: '#fff',
      borderRadius: 5,
      paddingHorizontal: 12,
      position: 'relative',
      paddingLeft: 50,
  
    },
    searchIcon: {
      marginLeft: 10,
      position: 'absolute',
      left: 10,
      tintColor: 'grey'
    },
    errorText: {
      color: 'white',
      textAlign: 'center',
      marginVertical: 10,
      fontSize: 20,
      fontWeight: 700
    },
    movieCard: {
      flexDirection: 'row',
      alignItems: 'center',
      
      borderRadius: 6,
      marginHorizontal: 18,
      marginBottom: 10,
      padding: 8,
      overflow: 'hidden',
    },
    poster: {
      width: width * 0.2, 
      height: width * 0.2,
      borderRadius: 6,
      resizeMode: 'contain',
      
    },
    infoContainer: {
      flex: 1,
      marginLeft: 12,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      flex: 1, 
      flexWrap: 'wrap'
    },
    txt: {
      fontSize: 20,
      fontWeight: 700,
      color: 'white',
      marginVertical: 10,
      marginHorizontal: 20
    },
    imgArr: {
      height: 20,
      width: 20,
      resizeMode: 'contain',
      tintColor: 'white',
    },
  
    touch: {
      marginLeft: 12,
      marginBottom: 10
    },
    top: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    listContainer: {
      flex: 1,
      marginBottom: 30
    }
  });