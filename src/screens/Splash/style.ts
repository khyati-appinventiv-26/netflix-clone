
import { StyleSheet } from "react-native"
import { myColors } from '../../utils/Theme'

export default StyleSheet.create({
    container: {
        backgroundColor: myColors.primary,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: '70%',
        height: 200,
    },
})