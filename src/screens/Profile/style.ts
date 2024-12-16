import { StyleSheet } from "react-native";
import { responsiveFontSize , responsiveHeight} from "react-native-responsive-dimensions";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121212',
      padding: 10,
  
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
      
      paddingTop: 60,
  
    },
    headerText: {
      fontSize: responsiveFontSize(3),
      color: 'white',
      fontWeight: 'bold',
  
    },
    headerIcons: {
      flexDirection: 'row',
    },
    icon: {
      marginLeft: 15,
    },
    profileSection: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    profileImage: {
      width: responsiveHeight(8),
      height: responsiveHeight(8),
      borderRadius: 50,
    },
    profileName: {
  
      fontSize: responsiveFontSize(2.5),
      color: 'white',
      fontWeight: 'bold',
  
    },
    sectionTitle: {
      fontSize: responsiveFontSize(2.5),
      color: 'white',
      fontWeight: 'bold',
      marginVertical: 10,
      marginHorizontal: 10
    },
    emptyText: {
      fontSize: 18,
      color: 'gray',
      textAlign: 'center',
      marginTop: 20,
    },
    search: {
      height: 25,
      width: 25
    },
    nextSec: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 10,
      // padding: 20
    },
    downView: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    downImg: {
      height: 50,
      width: 50
    },
    downTxt: {
      color: 'white',
      marginLeft: 10,
      fontSize: 16,
      fontWeight: '700'
    }
  });