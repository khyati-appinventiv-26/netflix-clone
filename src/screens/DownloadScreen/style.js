import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#181818',
        borderBottomWidth: 0.5,
        borderBottomColor: '#333',

    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 50
    },
    
    listContainer: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 10,
       
    },
    card: {
        marginBottom: 20,
        alignItems: 'center',
        backgroundColor: '#181818',
        padding: 10,
        borderRadius: 10,
        
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        resizeMode: 'cover',
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        color: 'white',
        marginTop: 10,
    },
    emptyText: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
        marginTop: 50,
    },
    imgArr: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        tintColor: 'white',
    },

    touch: {
        marginLeft: 12,
        marginBottom: 10,
        marginTop: 50
    },
});