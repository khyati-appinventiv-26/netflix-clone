import { StyleSheet } from "react-native"
import { responsiveHeight } from "react-native-responsive-dimensions"

export default StyleSheet.create({
    container : {
        flex: 1,
        paddingVertical: 50,
        paddingHorizontal: 20,
        backgroundColor: 'black'
    },
    firstContainer:{
        height: responsiveHeight(35),
        flex: 1,
        
    },
    imgArr:{
        height: 20,
        width: 20,
        resizeMode: 'contain',
        tintColor: 'white',
      },
    
      touch:{
        
        marginLeft: 10,
        marginTop: 30,
        marginBottom:20
      },
})