import { StyleSheet } from "react-native";
import { responsiveHeight } from "react-native-responsive-dimensions";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',

    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 70
    },
    profileCard: {
        alignItems: 'center',
        margin: 10,
        padding: 20,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    profileName: {
        color: '#fff',
        fontSize: 16,
    },
    editButton: {
        marginTop: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,

    },
    //   deleteButton: {
    //     marginTop: 5,
    //     backgroundColor: '#ff3b30',
    //     paddingHorizontal: 10,
    //     paddingVertical: 5,
    //     borderRadius: 5,
    //   },
    editText: {
        color: '#fff',
        fontSize: 12,
    },
    deleteText: {
        color: '#fff',
        fontSize: 12,
    },
    addProfileButton: {
        backgroundColor: '#1c1c1c',
        marginBottom: 25,
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
        // justifyContent: 'flex-start'
    },
    addProfileText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center'
    },
    modalContainer: {
        flex: 1,
        backgroundColor: '#1c1c1c',
        alignItems: 'center'
    },
    modalTitle: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 20,
        marginTop: 60,
        fontWeight: '700',
        
    },
    input: {
        width: '80%',
        backgroundColor: '#000',
        padding: 20,
        marginBottom: 20,
        borderRadius: 5,
        // marginLeft: 50,
        color: 'white'
    },
    profileImage: {
        width: responsiveHeight(8),
        height: responsiveHeight(8),
        borderRadius: 50,
        marginBottom: 20,
        alignSelf: 'center'
    },
    imgArr: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        tintColor: 'white',
    },

    touch: {
        marginLeft: 22,
        marginBottom: 20,
        marginTop: 50
    },
    view: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    touch1: {
        marginBottom: 20,
        marginTop: 70,
        marginRight: 20
    },
    view1: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    addButton : {
        marginBottom: 30,
        width: '80%',
        alignSelf : 'center',
        padding: 12,
        backgroundColor: '#e50914',
        opacity : 0.8,
        borderRadius: 30
        
    },
    addTxt : {
        color: 'white',
        textAlign: 'center',
        fontWeight: '700'
    }
});
