import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


type RootStackParamList = {
  VideoPlayer: { movieData: Movie }; 
};


interface Movie {
  id: string;
  title: string;
  poster_path: string;
}


type CardProps = {
  item: Movie; 
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const Card: React.FC<CardProps> = ({ item, navigation }) => {
  const handleNav = () => {
    navigation.navigate('VideoPlayer', { movieData: item }); 
  };

  return (
    <TouchableOpacity onPress={handleNav}>
      <View style={styles.card}>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500/${item?.poster_path}` }}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    margin: 10,
    backgroundColor: '#222',
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: 150,
    height: 225,
  },
  title: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    padding: 5,
  },
});
