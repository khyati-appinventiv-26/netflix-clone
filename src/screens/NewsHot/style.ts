import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    carouselItem: {
        width: width,
        height: height * 0.6,
        position: 'relative',
    },
    carouselImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    overlay: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
    },
    carouselTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 5,
    },
    carouselInfo: {
        fontSize: 16,
        color: '#ddd',
        marginBottom: 10,
    },
    carouselDescription: {
        fontSize: 16,
        color: '#ccc',
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        marginVertical: 20,
        marginLeft: 10,
    },
    listItem: {
        flexDirection: 'row',
        marginBottom: 20,
        marginHorizontal: 10,
        alignItems: 'center',
    },
    listImage: {
        width: 100,
        height: 150,
        borderRadius: 8,
    },
    listTextContainer: {
        marginLeft: 10,
        flex: 1,
    },
    listTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    listSubtitle: {
        fontSize: 14,
        color: '#aaa',
        marginTop: 5,
    },
    listDetails: {
        fontSize: 14,
        color: '#aaa',
        marginTop: 5,
    },
    listOverview: {
        fontSize: 14,
        color: '#ccc',
        marginTop: 10,
    },
});
