import { StyleSheet } from "react-native"
import { myColors } from '../../utils/Theme'

export default StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: myColors.primary
    },
    scrollView: {
        flex: 1
    },
    subContainer: {
        paddingHorizontal: 15,
        gap: 10,
        marginTop: 20,
        
      },
})  