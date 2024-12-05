import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Card = ({ item }) => (
  <View style={styles.card}>
    <Image
      source={{ uri: `https://image.tmdb.org/t/p/w500/${item?.poster_path}` }}
      style={styles.image}
    />
    
  </View>
);

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
