import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

export default StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'black',
    },
    container: {
        flex: 1,
        
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    input: {
        width: '100%',
        backgroundColor: '#333',
        color: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderRadius: 5,
        fontSize: 16,
        marginBottom: 20,
        
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
    signupText: {
        color: '#fff',
        marginTop: 20,
        fontSize: 16,
    },
    signupLink: {
        color: '#e50914',
        fontWeight: 'bold',
    },
    forgotPasswordText: {
        color: 'white',
        fontSize: 16,
        marginBottom: 10,
    },
    img: {
        height: responsiveHeight(25),
        width: responsiveWidth(25),
        resizeMode: 'contain',
        
    },
    imgVw: {
    marginBottom: 50
    },
    iconStyle: {
        position: 'absolute',
        bottom: responsiveHeight(5),
        right: responsiveWidth(1),
        
    },
});