import { StyleSheet,Dimensions } from "react-native";

import { responsiveHeight, responsiveFontSize } from "react-native-responsive-dimensions";
const { width } = Dimensions.get('window');
export default StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#080508',
     
    },
    scrollContainer: {
      flex: 1,
    },
    firstContainer: {
      height: responsiveHeight(35),
      position: 'relative',
    },
    imgArr: {
      height: 20,
      width: 20,
      resizeMode: 'contain',
      tintColor: 'white',
    },
    touch: {
      position: 'absolute',
      marginLeft: 12,
      top: 50,
    },
    secondContainer: {
      padding: 10,
      gap: 10,
    },
    titles: {
      
        fontSize: responsiveFontSize(2),
        color: 'black',
        fontWeight: '700',
      
    },
    playButton: {
      backgroundColor: 'white',
      height: responsiveHeight(5.3),
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: '#2B292B', 
      flexDirection: 'row'
    },
    seriesContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
    seriesText: {
      fontSize: 15,
      color: 'white',
      letterSpacing: 5,
    },
    titleText: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    releaseInfoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
    releaseDateText: {
      fontSize: 16,
      color: 'white',
    },
    separator: {
      width: 2.5,
      height: 20,
      backgroundColor: 'white',
    },
    voteContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
    },
    voteText: {
      color: 'white',
      fontSize: 16,
      fontWeight: '700',
      lineHeight: 15,
    },
    descriptionContainer: {
      padding: 10,
      gap: 10,
      marginTop: 5,
      marginBottom: 20
    },

    playButtonText: {
      fontSize: responsiveFontSize(2),
      color: 'black',
      fontWeight: '700',
    },
    downloadButton: {
      backgroundColor: '#2B292B',
      flexDirection: 'row',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    downloadIcon: {
      marginRight: 5,
    },
    downloadButtonText: {
      fontSize: responsiveFontSize(2),
      color: 'white',
      fontWeight: '700',
    },
    overviewText: {
      fontSize: 16,
      color: 'white',
      marginVertical: 10,
      lineHeight: 25,
      textAlign: 'justify',
  },
  episodesTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 15,
    marginVertical: 10,
  },
  episodeItem: {
    flexDirection: 'row',
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  episodeThumbnail: {
    width: width * 0.3,
    height: width * 0.25,
    borderRadius: 5,
    backgroundColor: '#444',
  },
  episodeInfo: {
    flex: 1,
    marginLeft: 15,
    marginBottom: 30
  },
  episodeNumber: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    marginBottom: 5,
  },
  episodeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  episodeOverview: {
    fontSize: 13,
    color: '#ccc',
    lineHeight: 18,
  },
});
  